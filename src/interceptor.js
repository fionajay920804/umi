import axios from "axios";
import { notification } from "antd";

const codeMessage = {
  202: "A request has been queued in the background (asynchronous task).",
  401: "The user has no permissions (token, username, password error).",
  404: "The request was made for a non-existent record, and the server did not act.",
  500: "Server error, please check server."
};

// 仅拦截异常状态响应
axios.interceptors.response.use(null, ({ response }) => {
  if (codeMessage[response.status]) {
    notification.error({
      message: `Error ${response.status}: ${response.config.url}`,
      description: codeMessage[response.status]
    });
  }
  return Promise.reject(err);
});
