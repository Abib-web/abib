import { createClient } from "contentful";

const client = createClient({
  space: "vfznes5bih27", // Remplace par ton Space ID
  accessToken: "N2zcV1d8tgaPqp0TY0XNjU0Mo2QiKoQCqxKTmGQ6hCc", // Remplace par ton Access Token
});

export default client;
