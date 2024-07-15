import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    // The interface forced use cnpj  (broken the principle ISP)
    this.cnpj = '';
  }
}
export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
