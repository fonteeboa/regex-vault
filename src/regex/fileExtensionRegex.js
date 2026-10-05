/**
 * @module fileExtensionRegex
 * @description Padrões de regex para validação de extensões de arquivo
 */

/**
 * Valida extensões de arquivo comuns (imagens, documentos, texto)
 * 
 * @type {RegExp}
 * @example
 * fileExtensionRegex.test("image.jpg") // true
 * fileExtensionRegex.test("document.pdf") // true
 * fileExtensionRegex.test("file.exe") // false
 */
export const fileExtensionRegex = /\.(jpg|jpeg|png|gif|pdf|docx|txt)$/i;

/**
 * Valida extensões de imagens (jpg, jpeg, png, gif, bmp, svg)
 * 
 * @type {RegExp}
 * @example
 * imageFileExtensionRegex.test("picture.jpg") // true
 * imageFileExtensionRegex.test("photo.jpeg") // true
 * imageFileExtensionRegex.test("document.pdf") // false
 */
export const imageFileExtensionRegex = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;

/**
 * Valida extensões de documentos (pdf, doc, docx, xls, xlsx, ppt, pptx)
 * 
 * @type {RegExp}
 * @example
 * documentFileExtensionRegex.test("report.pdf") // true
 * documentFileExtensionRegex.test("resume.doc") // true
 * documentFileExtensionRegex.test("image.png") // false
 */
export const documentFileExtensionRegex = /\.(pdf|doc|docx|xls|xlsx|ppt|pptx)$/i;

/**
 * Valida extensões de arquivos de texto (txt, csv, log, md)
 * 
 * @type {RegExp}
 * @example
 * textFileExtensionRegex.test("file.txt") // true
 * textFileExtensionRegex.test("data.csv") // true
 * textFileExtensionRegex.test("image.png") // false
 */
export const textFileExtensionRegex = /\.(txt|csv|log|md)$/i;

/**
 * Valida extensões de arquivos compactados (zip, rar, tar, gz)
 * 
 * @type {RegExp}
 * @example
 * compressedFileExtensionRegex.test("archive.zip") // true
 * compressedFileExtensionRegex.test("backup.rar") // true
 * compressedFileExtensionRegex.test("document.pdf") // false
 */
export const compressedFileExtensionRegex = /\.(zip|rar|tar|gz|7z)$/i;

/**
 * Valida extensões de vídeos (mp4, avi, mkv, mov, flv)
 * 
 * @type {RegExp}
 * @example
 * videoFileExtensionRegex.test("movie.mp4") // true
 * videoFileExtensionRegex.test("video.avi") // true
 * videoFileExtensionRegex.test("audio.mp3") // false
 */
export const videoFileExtensionRegex = /\.(mp4|avi|mkv|mov|flv)$/i;

/**
 * Valida extensões de áudios (mp3, wav, flac, aac, ogg)
 * 
 * @type {RegExp}
 * @example
 * audioFileExtensionRegex.test("song.mp3") // true
 * audioFileExtensionRegex.test("sound.wav") // true
 * audioFileExtensionRegex.test("video.mp4") // false
 */
export const audioFileExtensionRegex = /\.(mp3|wav|flac|aac|ogg)$/i;

/**
 * Valida extensões de arquivos executáveis (exe, dll, bat, sh, py)
 * 
 * @type {RegExp}
 * @example
 * executableFileExtensionRegex.test("program.exe") // true
 * executableFileExtensionRegex.test("script.bat") // true
 * executableFileExtensionRegex.test("document.pdf") // false
 */
export const executableFileExtensionRegex = /\.(exe|dll|bat|sh|py)$/i;

/**
 * Valida extensões de arquivos de desenvolvimento (js, ts, html, css, json, xml)
 * 
 * @type {RegExp}
 * @example
 * developmentFileExtensionRegex.test("script.js") // true
 * developmentFileExtensionRegex.test("style.css") // true
 * developmentFileExtensionRegex.test("image.png") // false
 */
export const developmentFileExtensionRegex = /\.(js|ts|html|css|json|xml)$/i;
