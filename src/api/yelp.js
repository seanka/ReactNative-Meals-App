import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer mdoNbwfkepbH3IAHX1C8vLYe6SjG341XP-j2mGhaLk54AiPCMnpse-jcHO_KhK3K8KUKVLqRBs8xhLQYR6HVcUP9DY86lsr4YxVKIsxMg07lICSUE4y65qpLKAZRY3Yx",
  },
});
