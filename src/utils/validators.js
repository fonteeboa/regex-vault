/**
 * Funções utilitárias de validação
 * @module validators
 */

import { emailRegex } from '../regex/emailRegex.js';
import { ipv4Regex } from '../regex/ipRegex.js';
import { urlRegex } from '../regex/urlRegex.js';
import { isValidBrazilianDate } from '../regex/dateRegex.js';

/**
 * Valida um endereço de email
 * @param {string} email - Email a ser validado
 * @returns {boolean} true se for válido
 */
export const isValidEmail = (email) => emailRegex.test(email);

/**
 * Valida um endereço IPv4
 * @param {string} ip - IP a ser validado
 * @returns {boolean} true se for válido
 */
export const isValidIPv4 = (ip) => ipv4Regex.test(ip);

/**
 * Valida uma URL
 * @param {string} url - URL a ser validada
 * @returns {boolean} true se for válida
 */
export const isValidUrl = (url) => urlRegex.test(url);

/**
 * Valida uma data no formato brasileiro (DD/MM/YYYY)
 * @param {string} date - Data a ser validada
 * @returns {boolean} true se for válida
 */
export const isValidDate = (date) => isValidBrazilianDate(date);

/**
 * Valida um número de telefone brasileiro
 * @param {string} phone - Telefone a ser validado
 * @returns {boolean} true se for válido
 */
export const isValidBrazilianPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10 || cleaned.length === 11;
};

/**
 * Valida um CEP brasileiro
 * @param {string} cep - CEP a ser validado
 * @returns {boolean} true se for válido
 */
export const isValidBrazilianCEP = (cep) => {
  const cleaned = cep.replace(/\D/g, '');
  return cleaned.length === 8;
};

/**
 * Valida um CPF brasileiro
 * @param {string} cpf - CPF a ser validado
 * @returns {boolean} true se for válido
 */
export const isValidCPF = (cpf) => {
  const cleaned = cpf.replace(/\D/g, '');
  if (cleaned.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cleaned)) return false;
  
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleaned.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10) remainder = 0;
  if (remainder !== parseInt(cleaned.charAt(9))) return false;
  
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleaned.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10) remainder = 0;
  if (remainder !== parseInt(cleaned.charAt(10))) return false;
  
  return true;
};

/**
 * Valida um CNPJ brasileiro
 * @param {string} cnpj - CNPJ a ser validado
 * @returns {boolean} true se for válido
 */
export const isValidCNPJ = (cnpj) => {
  const cleaned = cnpj.replace(/\D/g, '');
  if (cleaned.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(cleaned)) return false;
  
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleaned.charAt(i)) * weights1[i];
  }
  let remainder = sum % 11;
  const digit1 = remainder < 2 ? 0 : 11 - remainder;
  if (digit1 !== parseInt(cleaned.charAt(12))) return false;
  
  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cleaned.charAt(i)) * weights2[i];
  }
  remainder = sum % 11;
  const digit2 = remainder < 2 ? 0 : 11 - remainder;
  if (digit2 !== parseInt(cleaned.charAt(13))) return false;
  
  return true;
};

/**
 * Valida um número de cartão de crédito usando o algoritmo de Luhn
 * @param {string} cardNumber - Número do cartão a ser validado
 * @returns {boolean} true se for válido
 */
export const isValidCreditCard = (cardNumber) => {
  const cleaned = cardNumber.replace(/\D/g, '');
  if (cleaned.length < 13 || cleaned.length > 19) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i));
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
};

/**
 * Valida um número de telefone no formato E.164
 * @param {string} phone - Telefone a ser validado
 * @returns {boolean} true se for válido
 */
export const isValidE164Phone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 8 && cleaned.length <= 15;
};

/**
 * Valida um endereço MAC
 * @param {string} mac - Endereço MAC a ser validado
 * @returns {boolean} true se for válido
 */
export const isValidMACAddress = (mac) => {
  const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return macRegex.test(mac);
};

/**
 * Valida um UUID
 * @param {string} uuid - UUID a ser validado
 * @returns {boolean} true se for válido
 */
export const isValidUUID = (uuid) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

/**
 * Valida um número de IP privado
 * @param {string} ip - IP a ser validado
 * @returns {boolean} true se for privado
 */
export const isPrivateIP = (ip) => {
  const privateRanges = [
    /^10\./,
    /^172\.(1[6-9]|2[0-9]|3[01])\./,
    /^192\.168\./,
    /^127\./,
    /^169\.254\./
  ];
  
  return privateRanges.some(range => range.test(ip));
};

/**
 * Calcula a entropia de uma senha
 * @param {string} password - Senha a ser analisada
 * @returns {number} Valor da entropia
 */
export const calculatePasswordEntropy = (password) => {
  let charsetSize = 0;
  
  if (/[a-z]/.test(password)) charsetSize += 26;
  if (/[A-Z]/.test(password)) charsetSize += 26;
  if (/[0-9]/.test(password)) charsetSize += 10;
  if (/[^a-zA-Z0-9]/.test(password)) charsetSize += 32;
  
  if (charsetSize === 0) return 0;
  
  return password.length * Math.log2(charsetSize);
};

/**
 * Verifica se uma senha é forte baseada na entropia
 * @param {string} password - Senha a ser verificada
 * @param {number} minEntropy - Entropia mínima (padrão: 50)
 * @returns {boolean} true se for forte
 */
export const isStrongPassword = (password, minEntropy = 50) => {
  return calculatePasswordEntropy(password) >= minEntropy;
};
