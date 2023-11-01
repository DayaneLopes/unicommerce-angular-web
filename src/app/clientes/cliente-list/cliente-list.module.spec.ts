import { ClienteListModule } from './cliente-list.module';

describe('ClienteListModule', () => {
  let clienteListModule: ClienteListModule;

  beforeEach(() => {
    clienteListModule = new ClienteListModule();
  });

  it('should create an instance', () => {
    expect(clienteListModule).toBeTruthy();
  });
});
