/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1644409987711_6566';

  // add your middleware config here
  config.middleware = [];
  // 天气接口配置
  config.weather = {
    appid: '26215171',
    appsecret: 'boIdeN2v',
  };
  // 测试 微信公众号
  config.weChat = {
    appld: 'wx8572945895e0e0ef',
    secret: 'ccdf2b70df5462b0e682b413f7df0e5a',
    // 用户的openid
    users: [ 'o3sp55oVWFERx_qUN34FKrjVqetA' ],
    daily: 'fjHZUEExpPpSWQfgQ7oMNWz9fs41Kvw6RR63gq3Lffc', // 普通模板
    marry: 'ojvEb6JfLtRcFXxb0pK7I2-LGyxWEkZEy1ZAATQYJqc', // 结婚纪念日模板
    wageDay: '2MyC5YV2BoPtOwbqTQgeAYJhNMdoCkwtmJ-wp8DM-LQ', // 工资日模板
    birthday: 'DLHToQ8XcX4uc4pAsCjYHF5QqGAY9EqDcPMpbJ9enhM', // 生日模板
  };
  // 时间
  config.time = {
    wageDay: 10, // 工资日
    love: '2019-04-05', // 相爱日期
    marry: '2022-10-07', // 结婚纪念日
    // 生日配置
    // 老家过阴历生日，这里暂时写死
    birthday: {
      2021: '2021-06-02',
      2022: '2022-06-02',
      2023: '2023-06-02',
      2024: '2024-06-02',
      2025: '2025-06-02',
      2026: '2026-06-02',
    }, // 每年生日 阳历
    birthYear: 1992,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
