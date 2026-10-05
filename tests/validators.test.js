import { describe, expect, test } from 'vitest';
import { Validators } from '../src/index.js';

describe('Validators Utility Functions', () => {
  describe('isValidEmail', () => {
    test.each([
      'user@example.com',
      'user.name@example.com',
      'user+tag@example.com',
      'user@subdomain.example.com'
    ])('should return true for valid email: %s', (email) => {
      expect(Validators.isValidEmail(email)).toBe(true);
    });

    test.each([
      'invalid.email',
      '@example.com',
      'user@',
      'user@.com',
      'user@domain'
    ])('should return false for invalid email: %s', (email) => {
      expect(Validators.isValidEmail(email)).toBe(false);
    });
  });

  describe('isValidIPv4', () => {
    test.each([
      '192.168.1.1',
      '10.0.0.1',
      '172.16.0.1',
      '127.0.0.1'
    ])('should return true for valid IPv4: %s', (ip) => {
      expect(Validators.isValidIPv4(ip)).toBe(true);
    });

    test.each([
      '256.0.0.1',
      '192.168.1',
      '192.168.1.1.1',
      'abc.def.ghi.jkl'
    ])('should return false for invalid IPv4: %s', (ip) => {
      expect(Validators.isValidIPv4(ip)).toBe(false);
    });
  });

  describe('isValidUrl', () => {
    test.each([
      'https://example.com',
      'http://example.com',
      'https://example.com/path',
      'https://subdomain.example.com'
    ])('should return true for valid URL: %s', (url) => {
      expect(Validators.isValidUrl(url)).toBe(true);
    });

    test.each([
      'htp://example.com',
      '://example',
      'example_com',
      'http:/example.com'
    ])('should return false for invalid URL: %s', (url) => {
      expect(Validators.isValidUrl(url)).toBe(false);
    });
  });

  describe('isValidBrazilianDate', () => {
    test.each([
['31/01/2024', true],
['30/04/2024', true],
['31/04/2024', false],
['30/06/2024', true],
['31/06/2024', false],
['30/09/2024', true],
['31/09/2024', false],
['30/11/2024', true],
['31/11/2024', false],
['28/02/2024', true],
['29/02/2024', true],
['28/02/2023', true],
['29/02/2023', false],
['29/02/1900', false],
['29/02/2000', true],
    ])('isValidBrazilianDate(%s) should return %s', (date, expected) => {
      expect(Validators.isValidDate(date)).toBe(expected);
    });
  });

  describe('isValidBrazilianPhone', () => {
    test.each([
      '(11) 91234-5678',
      '11 91234-5678',
      '11912345678',
      '(21)98765-4321'
    ])('should return true for valid Brazilian phone: %s', (phone) => {
      expect(Validators.isValidBrazilianPhone(phone)).toBe(true);
    });

    test.each([
      '12345678',
      '+55 11 91234-5678',
      '123'
    ])('should return false for invalid Brazilian phone: %s', (phone) => {
      expect(Validators.isValidBrazilianPhone(phone)).toBe(false);
    });
  });

  describe('isValidBrazilianCEP', () => {
    test.each([
      '12345-678',
      '12345678'
    ])('should return true for valid CEP: %s', (cep) => {
      expect(Validators.isValidBrazilianCEP(cep)).toBe(true);
    });

    test.each([
      '1234-678',
      '1234567',
      'abcde-fgh'
    ])('should return false for invalid CEP: %s', (cep) => {
      expect(Validators.isValidBrazilianCEP(cep)).toBe(false);
    });
  });

  describe('isValidCPF', () => {
    test.each([
      '529.982.247-25',
      '111.444.777-35',
      '52998224725'
    ])('should return true for valid CPF: %s', (cpf) => {
      expect(Validators.isValidCPF(cpf)).toBe(true);
    });

    test.each([
      '111.111.111-11',
      '123.456.789-00',
      '12345678901'
    ])('should return false for invalid CPF: %s', (cpf) => {
      expect(Validators.isValidCPF(cpf)).toBe(false);
    });
  });

  describe('isValidCNPJ', () => {
    test.each([
      '04.252.011/0001-10',
      '11.222.333/0001-81',
      '04252011000110'
    ])('should return true for valid CNPJ: %s', (cnpj) => {
      expect(Validators.isValidCNPJ(cnpj)).toBe(true);
    });

    test.each([
      '11.111.111/1111-11',
      '12345678901234'
    ])('should return false for invalid CNPJ: %s', (cnpj) => {
      expect(Validators.isValidCNPJ(cnpj)).toBe(false);
    });
  });

  describe('isValidCreditCard', () => {
    test.each([
      '4111111111111111',
      '5500000000000004',
      '340000000000009',
      '6011000000000004'
    ])('should return true for valid credit card: %s', (card) => {
      expect(Validators.isValidCreditCard(card)).toBe(true);
    });

    test.each([
      '1234567890123456',
      '4111111111111112',
      '5500000000000005'
    ])('should return false for invalid credit card: %s', (card) => {
      expect(Validators.isValidCreditCard(card)).toBe(false);
    });
  });

  describe('isValidE164Phone', () => {
    test.each([
      '+5511912345678',
      '+11234567890',
      '+442071234567'
    ])('should return true for valid E.164 phone: %s', (phone) => {
      expect(Validators.isValidE164Phone(phone)).toBe(true);
    });

    test.each([
      '1234567',
      '1234567890123456',
      'abc'
    ])('should return false for invalid E.164 phone: %s', (phone) => {
      expect(Validators.isValidE164Phone(phone)).toBe(false);
    });
  });

  describe('isValidMACAddress', () => {
    test.each([
      '00:1A:7D:DA:71:13',
      '00-1A-7D-DA-71-13',
      'AA:BB:CC:DD:EE:FF'
    ])('should return true for valid MAC address: %s', (mac) => {
      expect(Validators.isValidMACAddress(mac)).toBe(true);
    });

    test.each([
      '00:1A:7D:DA:71',
      '00:1A:7D:DA:71:13:14',
      'GG:HH:II:JJ:KK:LL'
    ])('should return false for invalid MAC address: %s', (mac) => {
      expect(Validators.isValidMACAddress(mac)).toBe(false);
    });
  });

  describe('isValidUUID', () => {
    test.each([
      '550e8400-e29b-41d4-a716-446655440000',
      '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
      '6ba7b811-9dad-11d1-80b4-00c04fd430c8'
    ])('should return true for valid UUID: %s', (uuid) => {
      expect(Validators.isValidUUID(uuid)).toBe(true);
    });

    test.each([
      '550e8400-e29b-41d4-a716-44665544000',
      '550e8400-e29b-41d4-a716-4466554400000',
      'not-a-uuid'
    ])('should return false for invalid UUID: %s', (uuid) => {
      expect(Validators.isValidUUID(uuid)).toBe(false);
    });
  });

  describe('isPrivateIP', () => {
    test.each([
      '10.0.0.1',
      '172.16.0.1',
      '192.168.1.1',
      '127.0.0.1',
      '169.254.0.1'
    ])('should return true for private IP: %s', (ip) => {
      expect(Validators.isPrivateIP(ip)).toBe(true);
    });

    test.each([
      '8.8.8.8',
      '1.1.1.1',
      '172.32.0.1',
      '192.169.1.1'
    ])('should return false for public IP: %s', (ip) => {
      expect(Validators.isPrivateIP(ip)).toBe(false);
    });
  });

  describe('calculatePasswordEntropy', () => {
    test('should return 0 for empty password', () => {
      expect(Validators.calculatePasswordEntropy('')).toBe(0);
    });

    test('should return higher entropy for longer passwords', () => {
      const shortEntropy = Validators.calculatePasswordEntropy('abc');
      const longEntropy = Validators.calculatePasswordEntropy('abcdefghijklmnop');
      expect(longEntropy).toBeGreaterThan(shortEntropy);
    });

    test('should return higher entropy for complex passwords', () => {
      const simpleEntropy = Validators.calculatePasswordEntropy('abcdefgh');
      const complexEntropy = Validators.calculatePasswordEntropy('aB3$dE7!');
      expect(complexEntropy).toBeGreaterThan(simpleEntropy);
    });
  });

  describe('isStrongPassword', () => {
    test.each([
      'Str0ng!P@ssw0rd',
      'MyS3cur3P@ss!',
      'C0mpl3x!tyRul3s'
    ])('should return true for strong password: %s', (password) => {
      expect(Validators.isStrongPassword(password)).toBe(true);
    });

    test.each([
      'weak',
      'password',
      '12345678',
      'abcdefgh'
    ])('should return false for weak password: %s', (password) => {
      expect(Validators.isStrongPassword(password)).toBe(false);
    });
  });
});
