import { Globals } from "../globals";
import { RESET_PASSWORD_TEMPLATE } from "./reset-password";
import { VERIFY_EMAIL_TEMPLATE } from "./verify-email";
import { Config } from "../AppConfigs";
import { emails } from "../emails";
import { GlobalNotSetError } from "../errors";
const renderEmailTemplate = (template, data) => {
  if (!emails) {
    throw new GlobalNotSetError("emails is not yet defined");
  }
  try {
    return emails.render(template, data);
  } catch (error) {
    Globals.logger.error({ error, name: "emails" }, "An error occurred rendering your EJS email template");
    throw error;
  }
};
const renderVerifyEmailTemplate = (data) => {
  if (!Config.appName && !data.app_name) {
    throw new GlobalNotSetError("Config.appName is not yet defined");
  }
  const url = data.url;
  const app_name = data.app_name ?? Config.appName;
  return renderEmailTemplate(VERIFY_EMAIL_TEMPLATE, { app_name, url });
};
const renderResetPasswordTemplate = (data) => {
  if (!Config.appName && !data.app_name) {
    throw new GlobalNotSetError("Config.appName is not yet defined");
  }
  const url = data.url;
  const app_name = data.app_name ?? Config.appName;
  return renderEmailTemplate(RESET_PASSWORD_TEMPLATE, { app_name, url });
};
export {
  renderEmailTemplate,
  renderResetPasswordTemplate,
  renderVerifyEmailTemplate
};
//# sourceMappingURL=index.js.map
