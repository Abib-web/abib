import { createClient } from 'contentful';

const client = createClient({
  space: 'vfznes5bih27',
  environment: 'master', // Par défaut, c'est 'master'
  accessToken: 'wW3BbobXdREFFo5InR9anyVffyjD3WvOo3eNvkDPhF0'
});

export default client;
