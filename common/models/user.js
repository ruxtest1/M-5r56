'use strict';
var config = require('../../server/config.json');
var path = require('path');
var fail = {resultCode: 50000, resultDecription: 'System Error'};
var success = {resultCode: 20000, resultDescription: 'System Success', Data: [], Data2: []};
var app = require('../../server/server');
var loopback = require('loopback');
var console = process.console;
const fnSz = require('../lib/sz');
var moment = require('moment');
var extendObj = require('util')._extend;
var bcrypt = require('bcrypt-nodejs');
var ejs = require('ejs');
var unirest = require('unirest');
var md5 = require('md5');
var lowerCase = require('lower-case');


var isEmail = require('isemail');
var assets = require("../assets");
var fs = fs || require('fs');
const msg = app.resMsg;

let sz = new fnSz.fnSz();

module.exports = function (Scuser) {
    Scuser.disableRemoteMethodByName('prototype.__count__accessTokens');
    Scuser.disableRemoteMethodByName('prototype.__create__accessTokens');
    Scuser.disableRemoteMethodByName('prototype.__delete__accessTokens');
    Scuser.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
    Scuser.disableRemoteMethodByName('prototype.__findById__accessTokens');
    Scuser.disableRemoteMethodByName('prototype.__get__accessTokens');
    Scuser.disableRemoteMethodByName('prototype.__updateById__accessTokens');

    Scuser.disableRemoteMethodByName('patchOrCreate');
    Scuser.disableRemoteMethodByName('replaceOrCreate');
    Scuser.disableRemoteMethodByName('create');
    Scuser.disableRemoteMethodByName('createChangeStream');
    Scuser.disableRemoteMethodByName('find');
    Scuser.disableRemoteMethodByName('findById');
    Scuser.disableRemoteMethodByName('findOne');
    Scuser.disableRemoteMethodByName('prototype.patchAttributes');
    Scuser.disableRemoteMethodByName('exists_head');
    Scuser.disableRemoteMethodByName('replaceById');
    Scuser.disableRemoteMethodByName('exists');
    Scuser.disableRemoteMethodByName('deleteById');
    Scuser.disableRemoteMethodByName('destroyAll');
    Scuser.disableRemoteMethodByName('upsertWithWhere');
    Scuser.disableRemoteMethodByName('updateAll');
    Scuser.disableRemoteMethodByName('count');

    Scuser.setTTLLogin = 365; // 365 วัน

    Scuser.userRole = {
        admin: 'admin',
        owner: 'owner',
        member: 'member',
        vendor: 'vendor',
        staff: 'staff'
    };

    Scuser.fnGetTTL = (days) => {
        return 60 * 60 * 24 * days;
    };

    Scuser.rmFindUser = (req, cb) => {
        sz.cb = cb;
        (async () => {
            try {
                let filter = {
                    model: Scuser,
                    sql: "",
                    ts: null,
                    query: req.query,
                    and: null,
                };
                let res = await sz.fnModelFindPaging(filter);
                sz._20000(res);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    Scuser.fnSendEmailVerified = async function (user) {
        let mailOptions = {
            type: "email",
            //mailer: assets.models.scmail,
            to: user.email,
            from: assets.config.mailSender,
            subject: assets.vars.mailVerification.subject,
            template: assets.views.mailVerification,
            user: user
        };
        return user.verify(mailOptions);
    };

    Scuser.fnUpdateLastLogin = function (id) {
        let sz = new fnSz.fnSz();
        let dateNow = sz.dnow(true);
        return Scuser.updateAll({id: id}, {last_login: dateNow});
    };

    Scuser.fnSetUserIsMoveOut = function (id, is_move_out, ts) {
        let sz = new fnSz.fnSz();
        let dateNow = sz.dnow(true);
        if (!sz.checkData(is_move_out)) {
            is_move_out = true;
        }
        return Scuser.updateAll({id: id}, {is_move_out: is_move_out, updated_at: dateNow}, ts);
    };

    Scuser.fnRoleCreate = function (data, user_id, ts) {
        var RoleModel = app.models.Role;
        var RoleMapping = app.models.RoleMapping;
        return new Promise(async function (resolve, reject) {
            try {
                var roleName = data.name;
                const role = await RoleModel.findOne({where: {name: roleName}});
                console.file().time().tag("role").log(role);
                if (!role) {
                    RoleModel.create(data, ts, function (err, role) {
                        if (err) {
                            reject(err);
                        } else {
                            role.principals.create({
                                principalType: RoleMapping.USER,
                                principalId: user_id
                            }, ts, function (err2) {
                                if (err2) {
                                    reject(err2);
                                } else {
                                    resolve(role);
                                }
                            });
                        }
                    });
                } else {
                    role.principals.create({
                        principalType: RoleMapping.USER,
                        principalId: user_id
                    }, ts, function (err2) {
                        if (err2) {
                            reject(err2);
                        } else {
                            resolve(role);
                        }
                    });
                }
            } catch (err) {
                reject(err);
            }
        });
    };
    Scuser.fnPrincipalsCreate = function (role, user_id, ts) {
        var RoleMapping = app.models.RoleMapping;
        return new Promise(function (resolve, reject) {
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: user_id
            }, ts, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };
    Scuser.fnGetDefaultACLRole = function (role_name, user_id) {
        var acl = {}, ACLModel = app.models.ACL;
        switch (role_name) {
            case Scuser.userRole.admin:
                acl = {
                    principalType: ACLModel.USER,
                    principalId: user_id,
                    model: 'User',
                    property: ACLModel.ALL,
                    accessType: ACLModel.ALL,
                    permission: ACLModel.ALLOW
                };
                break;
            case Scuser.userRole.member:
                acl = {
                    principalType: ACLModel.USER,
                    principalId: user_id,
                    model: 'User',
                    property: ACLModel.ALL,
                    accessType: ACLModel.ALL,
                    permission: ACLModel.ALLOW
                };
                break;
            case Scuser.userRole.maid:
                acl = {
                    principalType: ACLModel.USER,
                    principalId: user_id,
                    model: 'User',
                    property: ACLModel.ALL,
                    accessType: ACLModel.ALL,
                    permission: ACLModel.ALLOW
                };
                break;
            default:
                acl = {
                    principalType: ACLModel.USER,
                    principalId: user_id,
                    model: 'User',
                    property: ACLModel.ALL,
                    accessType: ACLModel.ALL,
                    permission: ACLModel.ALLOW
                };
                break;
        }
        return acl;
    };
    Scuser.fnACLCreate = function (user_id, data) {
        var ACLModel = app.models.ACL;
        return new Promise(function (resolve, reject) {
            ACLModel.create(data, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

    /*
    แก้ไข role ของ user
     */
    Scuser.fnUpdateUserRole = async function (objRole, user_id, ts) {
        let sz = new fnSz.fnSz(null, app.userData.id);
        let RoleModel = app.models.Role;
        let RoleMapping = app.models.RoleMapping;
        const role = await RoleModel.findOne({where: {name: objRole.name}});
        if (!sz.checkData(role)) {
            throw 'ไม่พบข้อมูล Role: ' + objRole.name;
        }
        let oldRoleMapping = RoleMapping.find({where: {principalId: user_id}});

        //ถ้ามี role มากกว่า 1 หรือ ไม่มี ให้สร้าง role mapping
        if (!oldRoleMapping.length || oldRoleMapping.length > 1) {
            return Scuser.fnRoleCreate({name: objRole.name}, user_id, ts);
        } else {//ถ้ามี role mapping แค่ 1 ตัว ให้อัพเดทตัวเดิม
            await sz.fnModelUpdate(oldRoleMapping[0].id, {roleId: role.id}, RoleMapping, ts);
        }
        return role;
    };

    Scuser.fnCreateUserRole = function (role_name, user_id, ts) {
        var RoleModel = app.models.Role;
        var RoleMapping = app.models.RoleMapping;
        var ACLModel = app.models.ACL;
        return new Promise(async function (resolve, reject) {
            try {
                var acl = await Scuser.fnGetDefaultACLRole(role_name, user_id);
                var role = await Scuser.fnRoleCreate({name: role_name.name}, user_id, ts);
                // var role = await RoleModel.create({name: role_name}, ts);
                console.file().time().tag('res role').log(role);
                // role.principals = await Scuser.fnPrincipalsCreate(role, user_id, ts);
                // role.principals = await role.principals.create({
                //     principalType: RoleMapping.USER,
                //     principalId: user_id
                // }, ts);
                // role.acl = await ACLModel.crete(acl, ts);
                resolve(role);
            } catch (err) {
                reject(err);
            }
        });
    };
    Scuser.fnRandomPass = function (length) {
        var text = "";
        // var possible = "abcdefghklmnpqrstuvwxyz123456789";
        var possible = "123456789";
        length = length || 4
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    //Scuser.beforeRemote('create', function(context, user, next) {
    //    context.args.data.date = Date.now();
    //    context.args.data.publisherId = context.req.accessToken.userId;
    //    next();
    //});

    Scuser.findUserByAccount = function (request, account_id, cb) {
        sz.cb = cb;
        //var AccountModel = app.models.accounts;
        console.tag('input data from function createUser').log(request);
        var sql = "\
            SELECT \
                a.*,\
                CONCAT(a.first_name, ' ', a.last_name,\
                    CASE\
                    WHEN a.nickname != '' THEN concat('(', a.nickname, ')')\
                    ELSE ''\
                    END\
                ) as name\
            FROM users a\
            WHERE a.deleted_at IS NULL\
        ";
        sz.fnExecute(function (result) {
            cb(null, result);
        }, User, sql);

        //Scuser.find({where: {account_id: account_id, deleted_at: null}}, function (err, res) {
        //    if (err) {
        //        sz._50000(err);
        //    } else {
        //        sz._20000(res);
        //    }
        //});
    };

    Scuser.fnCheckDuplicate = async function (account_id, user_id, username) {
        let sz = new fnSz.fnSz(null);

        let user = await sz.fnFindOne({account_id: account_id, username: username}, Scuser);
        let duplicate = false;
        if (user) {
            if (user.id != user_id) {
                duplicate = true;
            }
        }
        return duplicate;
    };

    Scuser.fnEncodePass = function (pass) {
        return bcrypt.hashSync(pass, null, null);
    };

    Scuser.fnEditPassword = async function (id, pass, ts) {
        let sz = new fnSz.fnSz(null);
        let userData = {
            password: Scuser.fnEncodePass(pass),
            updated_at: sz.dnow(true)
        };
        return await Scuser.updateAll({id: id}, userData, ts);
        // return sz.fnModelUpdate(id, userData, Scuser, ts)
    };

    Scuser.fnSetEmailVerified = function (id, ts) {
        let sz = new fnSz.fnSz(null);
        let userData = {
            emailVerified: 1,
            updated_at: sz.dnow(true)
        };
        return Scuser.updateAll({id: id}, userData, ts);
    };

    Scuser.fnSetUserRole = async function (user_id, role_id, ts) {
        let sz = new fnSz.fnSz(null);
        let dup = await sz.fnModelCheckDuplicate({
            principalType: sz.roleMappingModel.USER, principalId: user_id, roleId: role_id
        }, sz.roleMappingModel);
        if (dup) {
            return dup;
        }
        let data = {
            principalType: sz.roleMappingModel.USER,
            principalId: user_id,
            roleId: role_id,
        };
        return sz.fnModelCreate(data, sz.roleMappingModel, ts);
    };

    Scuser.fnGetRoleList = async function (role_id, role_name) {
        let sz = new fnSz.fnSz(null);
        let filter = {};
        if (sz.checkData(role_id)) {
            filter.id = role_id;
        }
        if (sz.checkData(role_name)) {
            filter.name = role_name;
        }
        return sz.fnModelFind(filter, sz.roleModel);
    };

    Scuser.fnFindRoleByUserID = async function (user_id, nameOnly) {
        let sz = new fnSz.fnSz(null);
        let RoleMapping = app.models.RoleMapping,
            RoleModel = app.models.Role,
            ds = RoleMapping.dataSource;
        RoleMapping.attachTo(ds); // `ds` is your data source

        let rowID = await RoleModel.getRoles({principalType: RoleMapping.USER, principalId: user_id});
        let roles = await RoleModel.find({where: {id: {inq: rowID}}});
        roles = sz.fnDeleteKey(roles, ['description', 'created', 'modified']);
        if (nameOnly === true) {
            let roleData = [];
            for (let i in roles) {
                let roleName = roles[i].name;
                roleData.push(roleName);
            }
            return roleData;
        } else {
            return roles;
        }
    };

    Scuser.fnEditUsername = async function (account_id, id, username, ts) {
        let sz = new fnSz.fnSz(null);

        let check = await Scuser.fnCheckDuplicate(account_id, id, username);
        if (check) {
            console.tag('Duplicate username!').log(check)
            //throw new Error({message: "Duplicate username!"});
            return false;
        } else {
            let userData = {
                username: username,
                updated_at: sz.dnow(true)
            };
            let user = await Scuser.updateAll({id: id}, userData, ts);
            return {
                account_id: account_id,
                id: id,
                username: username
            };
        }
        //
        // return new Promise(async function (resolve, reject) {
        //     try {
        //         let check = await Scuser.fnCheckDuplicate(account_id, id, username);
        //         if (check) {
        //             reject({message: "Duplicate username!"})
        //         } else {
        //             let userData = {
        //                 username: username,
        //                 updated_at: sz.dnow(true)
        //             };
        //             let user = Scuser.updateAll({id: id}, userData, ts);
        //             resolve({
        //                 account_id: account_id,
        //                 id: id,
        //                 username: username
        //             });
        //         }
        //     } catch(err) {
        //         reject(err);
        //     }
        // });
    };

    Scuser.fnPasswordEncrypt = (password) => {
        return bcrypt.hashSync(password, null, null);
    };

    Scuser.fnEditUserData = async function (id, data, ts) {
        let dup = await sz.fnModelCheckDuplicate({username: data.username}, id, Scuser, ts);
        if (dup) {
            throw 'ข้อมูล Username: ' + data.username + ' มีแล้วในระบบ';
        }
        let newData = sz.extObj({}, data);
        if (sz.checkData(newData.password)) {
            newData.password = Scuser.fnPasswordEncrypt(data.password);
        }
        newData.updated_at = sz.dnow(true);
        return Scuser.updateAll({id: id}, newData, ts);
    };

    Scuser.rmEditUser = function (body, user_id, cb) {
        sz.cb = cb;
        const fnStart = async function (id, data) {
            try {
                let Transaction = await Scuser.beginTransaction('READ COMMITTED');
                sz.Transaction = Transaction;
                console.time().file().tag('Transaction').log(Transaction);
                let ts = {transaction: Transaction};

                let res = await Scuser.fnEditUserData(id, data, ts);

                //edit role
                let role = await sz.fnFindOne({name: body.role_name}, app.models.Roles);
                let roleMapping = await sz.fnModelUpdateAll({principalId: user_id}, {
                        roleId: role.id
                    },
                    app.models.RoleMapping, ts);
                res.role_id = role.id;

                await Transaction.commit();

                //เช็คเพื่อลบรูป from google
                await app.models.Container.fnCheckDeleteFileGoogle(body.delete_file || null);
                sz._20000(res);
            } catch (err) {

                sz._50000(err);
            }
        };
        fnStart(user_id, body);
    };

    Scuser.fnFindUserByRole = async function (account_id, role) {
        var loopback = require('loopback');
        var Role = loopback.getModel('Role');
        let sz = new fnSz.fnSz(null);
        var fnFindUsers = function (account_id, resRole) {
            // console.log(resRole);
            var userIdList = [];
            resRole.forEach(function (val, idx) {
                val.principals(function (err, principals) {
                    for (var i = 0; i < principals.length; i++) {
                        userIdList.push(parseInt(principals[i].principalId));
                    }
                });
            });
            return Scuser.find({where: {id: {inq: userIdList}, account_id: account_id, deleted_at: null}});
        };

        var fnFindRole = function (role_name) {
            return new Promise(function (resolve, reject) {
                console.log('start find:' + role_name)
                Role.find({include: 'principals', where: {name: role_name}}, function (err, res) {
                    if (err)
                        reject(err);
                    else {
                        console.log(res);
                        resolve(res);
                    }
                });
            });
        };
        return new Promise(async function (resolve, reject) {
            try {
                var resRole = await fnFindRole(role);
                if (!resRole.length) {
                    resolve([]);
                } else {
                    console.log('role:', resRole)
                    var users = await fnFindUsers(account_id, resRole);
                    resolve(users);
                }
            } catch (err) {
                reject(err);
            }
        });
    };

    Scuser.fnCreateUserVendor = async function (data, ts) {
        let objRoleVendor = {name: Scuser.userRole.vendor};
        let oldUser = await Scuser.find({where: {email: data.email}});
        let userData = null;
        if (sz.checkData(oldUser)) {
            userData = oldUser[0];
            if (userData.deleted_at !== null) {
                userData.role = await Scuser.fnUpdateUserRole(objRoleVendor, userData.id, ts);
                userData.deleted_at = null;
                userData.deleted_by = '';
                await userData.save();
            } else {
                throw 'ข้อมูล ' + data.username + '/' + data.email + ' มีอยู่แล้วในระบบ';
            }
        } else {
            userData = await sz.fnModelCreate(data, Scuser, ts);
            let userID = userData.id;
            userData.role = await Scuser.fnCreateUserRole(objRoleVendor, userID, ts);
            return userData;
        }
        if (sz.checkData(userData)) {
            return userData;
        } else {
            throw 'สร้าง user ผิดพลาด';
        }
    };

    Scuser.fnGetVtigerUserFromUsername = function (username) {
        return new Promise(function (resolve, reject) {
            try {
                let urlGetUser = 'http://webservice.smartzoneonline.com/vtiger/login/' + username
                unirest.get(urlGetUser).headers({'Content-Type': 'application/json'}).end(function (res) {
                    if (res.statusCode === 200) {
                        if (res.body.length) {
                            resolve(res.body[0]);
                        } else {
                            reject(new Error('VTIGER User Not Found!'))
                        }
                    } else {
                        reject(new Error('Get VTIGER User  Error!'))
                    }
                });
            } catch (err) {
                reject(err);
            }
        })
    };

    Scuser.rmGetUserByRole = function (account_id, role, cb) {
        sz.cb = cb;
        var loopback = require('loopback');
        var Role = loopback.getModel('Role');
        // var Role = app.models.Role;
        var userIdList = [];
        Scuser.fnFindUserByRole(account_id, role).then(function (res) {
            if (res.length) {
                sz._20000(res);
            } else {
                sz._40401();
            }
        }).catch(function (err) {
            sz._50000(err);
        })
        /*
         var fnFindUsers = function (account_id, resRole) {
         // console.log(resRole);
         userIdList = [];
         resRole.forEach(function (val, idx) {
         val.principals(function (err, principals) {
         for (var i = 0; i < principals.length; i++) {
         userIdList.push(parseInt(principals[i].principalId));
         }
         });
         });
         console.log(userIdList);
         return Scuser.find({where: {id: {inq: userIdList}, account_id: account_id}});
         };

         var fnFindRole = function (role_name) {
         return new Promise(function (resolve, reject) {
         console.log('start find:' + role_name)
         Role.find({include: 'principals', where: {name: role_name}}, function (err, res) {
         if (err)
         reject(err);
         else {
         console.log(res);
         resolve(res);
         }
         });
         });
         };

         async function getUser(account_id, role_name) {
         try {
         var resRole = await fnFindRole(role_name);
         if (!resRole.length) {
         sz._40401();
         } else {
         console.log('role:', resRole)
         var users = await fnFindUsers(account_id, resRole);
         if (users.length) {
         sz._20000(users);
         } else {
         sz._40401();
         }
         }
         } catch (err) {
         sz._50000(err);
         }
         }
         getUser(account_id, role);*/

        // Role.find({include: 'principals', where: {name: 'admin'}}, function (err, res) {
        //     if (err)
        //         sz._50000(err);
        //     else {
        //         sz._20000(res);
        //     }
        // })
    };
    Scuser.rmGetRoleList = function (req, cb) {
        sz.cb = cb;
        let fnStart = async function () {
            try {
                console.tag('user data').log(app.userData)
                let query = req.query, role_id = query.role_id, role_name = query.role_name;
                let res = await Scuser.fnGetRoleList(role_id, role_name);
                sz._20000(res);
            } catch (err) {
                sz._50000(err);
            }
        };
        fnStart();
    };

    Scuser.afterRemote('login', function (ctx, result, next) {
        let sz = new fnSz.fnSz(next), userID = result.userId, dateNow = sz.dnow(true);
        // const findUser = function (id) {
        //     return sz.fnFindById(id, Scuser);
        // };
        const updateLastLogin = function (id) {
            return Scuser.updateAll({id: id}, {last_login: dateNow});
        };

        return new Promise(async function (resolve, reject) {
            try {
                let lastLogin = await updateLastLogin(result.userId);
                let roles = await Scuser.fnFindRoleByUserID(result.userId);
                let roleData = {name: [], list: roles}, isMember = false;
                for (let i in roles) {
                    let roleName = roles[i].name;
                    isMember = roleName == Scuser.userRole.member ? true : false;
                    roleData.name.push(roleName);
                }
                result.is_member = isMember;
                result.member = {};
                if (isMember) {
                    let contract = await sz.fnFindOne({user_id: result.userId}, sz.contractModel);
                    result.member = await sz.fnFindById(contract.tenant_id, sz.tenantModel);
                    result.member.room_id = contract.room_id;
                    result.member.building_id = contract.building_id;
                    result.member.property_id = contract.property_id;
                    result.member.contract_id = contract.id;
                }
                result.role = roleData;
                sz._20000(result);
            } catch (err) {
                sz._50000(err);
            }
        });
    });

    Scuser.rmUserLogin = function (credentials, req, cb) {
        sz.cb = cb;
        if (credentials.id) {
            if (isEmail.validate(credentials.id) && !credentials.email) {
                credentials["email"] = credentials.id;
                delete credentials.id;
            }
            else if (!credentials["username"]) {
                credentials["username"] = credentials.id;
                delete credentials.id;
            }
        }
        credentials.ttl = Scuser.fnGetTTL(Scuser.setTTLLogin);

        let fnStart = async function () {
            try {
                let getUser = await sz.fnFindOne({username: credentials.username}, Scuser);
                //ไม่มี user หรือโดนลบ
                if (!getUser) {
                    console.file().time().tag('user not found').log(getUser);
                    throw 'USER_NOT_FOUND';
                }

                //ย้ายออกไปแล้ว
                if (getUser.is_move_out == true) {
                    console.file().time().tag('is_move_out').log(getUser.is_move_out);
                    throw 'USER_NOT_FOUND';
                }

                //ยังไม่ได้ยืนยันอีเมล
                if (getUser.emailVerified == false) {
                    console.file().time().tag('emailVerified').log(getUser.emailVerified);
                    throw 'EMAIL_NOT_VERIFIED';

                }

                let result = null;
                try {
                    result = await Scuser.login(credentials, 'user');
                } catch (err) {
                    throw 'LOGIN_FAIL';
                }
                let user_id = result.userId;
                await Scuser.fnUpdateLastLogin(user_id);
                let roles = await Scuser.fnFindRoleByUserID(user_id);
                let roleData = {name: [], list: roles}, isMember = false, isVendor = false;
                for (let i in roles) {
                    let roleName = roles[i].name;
                    isMember = roleName == Scuser.userRole.member ? true : false;
                    isVendor = roleName == Scuser.userRole.vendor ? true : false;
                    roleData.name.push(roleName);
                }
                result.is_member = isMember;
                result.is_vendor = isVendor;
                // result.member = {};
                if (isMember) {
                    // let contract = await sz.fnFindOne({user_id: user_id}, sz.contractModel);
                    // result.member = await sz.fnFindById(contract.tenant_id, sz.tenantModel);
                    // result.member.room_id = contract.room_id;
                    // result.member.building_id = contract.building_id;
                    // result.member.property_id = contract.property_id;
                    // result.member.contract_id = contract.id;
                }
                result.role = roleData;
                sz._20000(result);
            } catch (err) {
                sz._50000(err);
            }
        };
        fnStart();
    };

    Scuser.remoteMethod('rmUserLogin', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}},
            {arg: 'req', type: 'object', http: {source: 'req'}},
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/user-login', verb: 'post'}
    });

    Scuser.remoteMethod('rmUserCreate', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'body'}, required: true},
            // {arg: 'account_id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/create-user', verb: 'post'}
    });

    Scuser.remoteMethod('rmEditUser', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}, required: true},
            {arg: 'id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/:id', verb: 'put'}
    });

    Scuser.remoteMethod('findUserByAccount', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}},
            {arg: 'account_id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/:account_id/list', verb: 'get'}
    });

    Scuser.remoteMethod('rmGetRoleList', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}},
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/role-list', verb: 'get'}
    });

    // Scuser.remoteMethod('rmGetUserByRole', {
    //     accepts: [
    //         {arg: 'account_id', type: 'number', required: true},
    //         {arg: 'role', type: 'string', required: true}
    //     ],
    //     returns: {arg: 'users', type: 'string'},
    //     http: {
    //         verb: 'get',
    //         path: '/byrole/:account_id/:role'
    //     }
    // });


    /***********************************************************************
     * Login
     ***********************************************************************/
    Scuser.beforeRemote('login', function (context, unused, next) {
        /** Rewrite Credentials **/
        let sz = new fnSz.fnSz()
        let credentials = context.args.credentials;
        let include = context.args.include;
        if (!sz.checkData(include)) {
            context.args.include = ['user']
        } else {
            if (context.args.include.indexOf('user') === -1) {
                context.args.include.push('user');
            }
        }
        console.log(include);
        console.log(credentials)
        if (credentials.id) {
            if (isEmail.validate(credentials.id) && !credentials.email) {
                credentials["email"] = credentials.id;
                delete credentials.id;
            }
            else if (!credentials["username"]) {
                credentials["username"] = credentials.id;
                delete credentials.id;
            }
        }
        credentials.ttl = assets.vars.login.ttl;
        next();
    });

    /***********************************************************************
     * Reset Password
     ***********************************************************************/

    Scuser.beforeRemote('resetPassword', function (context, user, next) {
        var email = (email || context.args.options.email)
        Scuser.find({fields: 'id', where: {email: email}}, function (err, user) {
            if (err) next(err)
            else Scuser.accessToken.find({
                fields: ['id', 'ttl', 'created'],
                where: {userId: user.id}
            }, function (err, tokenList) {
                if (err) next(err)
                else if (tokenList && tokenList.length > 0) {
                    var now = new Date();
                    tokenList = tokenList.filter(function (token) {
                        if (now.getTime() <= (token.created.getTime() + (token.ttl * 1000))) return token;
                    })
                    if (tokenList.length > 0) {
                        console.log("Receive Reseting Password Attemp between " +
                            "waiting for confirmation, please check the email!")
                        next({'statusCode': '100', 'code': 'IN_PROGRESS', 'message': 'In Progress'})
                    } else next();
                } else next();
            })
        })
    })

    Scuser.afterRemote('resetPassword', function (context, user, next) {
        console.log(user);
    })

    Scuser.on('resetPasswordRequest', function (info) {
        var email = assets.models.Email;
        var args = assets.vars.resetPasswordRequest;
        console.log("Config: " + JSON.stringify(config));
        args.host_ui = info.host_ui;
        args.email = info.email;
        args.username = info.user.username;
        args.accessToken = info.accessToken.id;

        //ถ้ารีเซตผ่านหลังบ้าน
        if (sz.checkData(info.host_ui)) {
            args.url_reset = info.host_ui + '/#/reset-password/' + info.accessToken.id;
        } else {
            args.url_reset = app.get('host_api') + 'reset-password?accessToken=' + info.accessToken.id +
                '&lang=' + app.lang;
        }
        let subject = 'เปลี่ยนรหัสผ่านผู้ใช้งาน Marukyo';
        let path = __dirname + '/../assets/views/resetPasswordRequest/th.ejs';
        if (app.lang === 'en') {
            subject = 'Reset Password Request';
            path = __dirname + '/../assets/views/resetPasswordRequest/en.ejs';
        }
        let mailOptions = {
            to: info.email,
            from: 'Marukyo <do_not_reply@marukyo.com>',
            subject: subject,
            html: ejs.render(fs.readFileSync(path, 'UTF-8'), args),
        };

        email.send(mailOptions, function (err, res) {
            // console.log("ResetPassword Email was sent to " + mailOptions.to + "!");
            if (res) {
                // console.log(res); // Reference SMTP Code @ http://www.greenend.org.uk/rjk/tech/smtpreplies.html
            }
        });
    });

    Scuser.submitResetPassword = function (accessTokenId, form, cb) {
        sz.cb = cb;
        (async () => {
            try {
                if (!sz.checkData(form.new_password)) {
                    throw app.lang === 'th' ? 'กรุณาระบุรหัสผ่านใหม่' : 'Please add new password.';
                } else if (!sz.checkData(form.confirm_new_password)) {
                    throw app.lang === 'th' ? 'กรุณายืนยันรหัสผ่านใหม่' : 'Please add confirm new password.';
                } else if (form.new_password !== form.confirm_new_password) {
                    throw app.lang === 'th' ? 'รหัสผ่านใหม่ต้องตรงกับรหัสยืนยัน' : 'New password does not match.';
                }
                Scuser.findByAccessToken(accessTokenId, async function (err, user) {
                    if (err) {
                        cb(app.lang === 'th' ? 'Access Token หมดอายุ หรือถูกใช้งานไปแล้ว' : 'AccessToken has expired.')
                    }
                    else {
                        user.password = form.confirm_new_password;
                        await user.save({validate: true});
                        sz._20000(user);
                    }
                });
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    // Scuser.remoteMethod('submitResetPassword', {
    //   accepts: [
    //     {arg: 'accessToken', type: 'string', required: true, http: {source: 'query'}},
    //     {arg: 'form', type: 'object', required: true, http: {source: 'body'}},
    //   ],
    //   returns: {arg: 'return', type: 'object', root: true},
    //   http: {verb: 'put', path: '/submit-reset-password'}
    // });

    Scuser.remoteMethod('submitResetPassword', {
        accepts: [
            {arg: 'accessToken', type: 'string', required: true},
            {arg: 'body', type: 'object', http: {source: 'body'}}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {verb: 'put', path: '/submit-reset-password'}
    });
    /***********************************************************************
     * Registration
     ***********************************************************************/
    Scuser.afterRemote('create', function (context, user, next) {
        let mailOptions = {
            type: "email",
            mailer: assets.models.scmail,
            to: user.email,
            from: assets.config.mailSender,
            subject: assets.vars.mailVerification.subject,
            template: assets.views.mailVerification,
            user: user
        };
        user.verify(mailOptions, function (err, resp, next) {
            if (err) return next(err);
            console.log("Verification Email was sent to " + mailOptions.to + "!");
            context.res.status(200);
            context.res.send(JSON.stringify({
                'statusCode': 200,
                'code': 'SUCCESS',
                'message': 'User was Created Success!'
            }));
        });
    });


    /***********************************************************************
     * Security & Utilization
     ***********************************************************************/
    Scuser.findByAccessToken = function (accessTokenId, next) {
        var accessToken = accessToken || Scuser.accessToken;
        return accessToken.findById(accessTokenId, function (err, token) {
            if (err) return next(err);
            if (token) {
                let now = new Date();
                if (now.getTime() <= (token.created.getTime() + (token.ttl * 1000))) {
                    Scuser.findById(token.userId, function (err, user) {
                        if (err) return next(err);
                        if (user) next(null, user);
                        else next({statusCode: 410, code: 'MISSING_BINDING_USER', message: "Missing Binding User"})
                    });
                } else next({
                    statusCode: 410,
                    code: 'ACCESS_TOKEN_WAS_EXPIRED',
                    message: "The Access Token was Expried"
                })
            } else next({statusCode: 401, code: 'INVALID_ACCESS_TOKEN', message: "Invalid Access Token"})
        });
    };
    Scuser.rmUserCreate = function (body, req, cb) {
        console.file().time().tag("body").log(body);
        console.file().time().tag("query str").log(req.query);
        sz.cb = cb;

        (async () => {
            try {
                let Transaction = await Scuser.beginTransaction('READ COMMITTED');
                sz.Transaction = Transaction;
                console.time().file().tag('Transaction').log(Transaction);
                let ts = {transaction: Transaction};
                let res = await sz.fnModelCreate(body, Scuser, ts);

                var role = await Scuser.fnCreateUserRole({name: body.role_name}, res.id, ts);

                await Transaction.commit();
                sz._20000(res);
            } catch (err) {

                sz._50000(err);
            }
        })();
    };

    Scuser.rmUserDelete = function (body, req, user_id, cb) {
        console.file().time().tag("body").log(body);
        console.file().time().tag("query str").log(req.query);
        console.file().time().tag("user_id").log(user_id);
        sz.cb = cb;

        (async () => {
            try {
                let oldUser = await sz.fnFindById(user_id, Scuser);
                await sz.fnDataNotFound(oldUser, 'ไม่พบข้อมูล User');

                const Transaction = await Scuser.beginTransaction('READ COMMITTED');
                sz.Transaction = Transaction;
                console.time().file().tag('Transaction').log(Transaction);
                const ts = {transaction: Transaction};
                let res = await sz.fnMarkDelete(user_id, Scuser, ts);
                await Transaction.commit();

                let vendor = await sz.fnFindOne({user_id: user_id}, app.models.Vendors, ts);
                if (sz.checkData(vendor)) {
                    vendor.user_id = 0;
                    await vendor.save();
                }

                sz._20000(res);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };


    Scuser.rmUserFindByID = function (req, user_id, cb) {
        sz.cb = cb;
        console.file().time().tag("query str").log(req.query);

        (async () => {
            try {
                let data = await sz.fnFindById(user_id, Scuser);
                if (sz.checkData(data)) {
                    let RoleMapping = app.models.RoleMapping,
                        RoleModel = app.models.Role,
                        ds = RoleMapping.dataSource;
                    RoleMapping.attachTo(ds); // `ds` is your data source

                    let rowID = await RoleModel.getRoles({principalType: RoleMapping.USER, principalId: user_id});
                    let roles = await RoleModel.find({where: {id: {inq: rowID}}});
                    console.log(roles);
                    if (sz.checkData(roles)) {
                        data.role_id = roles[0].id;
                        data.role_name = roles[0].name;
                    }
                }
                sz._20000(data);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    Scuser.fnResetPassword = async function (data) {
        let email = data.email, ttl = Scuser.fnGetTTL(1.5);
        let user = await sz.fnFindOne({email: email}, Scuser);
        if (!sz.checkData(user)) {
            throw {code: 'EMAIL_NOT_FOUND', value: email};
            // throw msg.Scuser.email_not_found + email;
        }
        let accessToken = await user.createAccessToken(ttl);

        Scuser.emit('resetPasswordRequest', {
            email: email,
            accessToken: accessToken,
            user: user,
            options: {email: email},
            host_ui: data.host_ui,
        });
        return accessToken;
    };

    Scuser.rmForgetPassword = function (body, cb) {
        console.file().time().tag("body").log(body);
        sz.cb = cb;

        const fnStart = async function (data) {
            try {
                let email = data.email;
                await sz.fnInvalidParameter(email, msg.member.please_specify_email);


                let res = await Scuser.fnResetPassword(data);
                sz._20000(res);
            }
            catch (err) {
                sz._50000(err);
            }
        };
        fnStart(body);
    };


    Scuser.remoteMethod('rmForgetPassword', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}},
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/forget-password', verb: 'post'}
    });

    Scuser.remoteMethod('findByAccessToken', {
        accepts: [{arg: 'accessToken', type: 'string'}],
        returns: [
            {arg: 'root', type: 'object', root: true},
            {arg: 'statusCode', type: 'string', http: {target: 'errorStatus'}}
        ],
        http: {verb: 'get'}
    });

    Scuser.remoteMethod('rmFindUser', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/find', verb: 'get'}
    });

    Scuser.remoteMethod('rmUserCreate', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}},
            {arg: 'req', type: 'object', http: {source: 'req'}},
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/', verb: 'post'}
    });

    Scuser.remoteMethod('rmUserDelete', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}},
            {arg: 'req', type: 'object', http: {source: 'req'}},
            {arg: 'user_id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/:user_id', verb: 'delete'}
    });

    Scuser.remoteMethod('rmUserFindByID', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}},
            {arg: 'user_id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/:user_id', verb: 'get'}
    });
};
