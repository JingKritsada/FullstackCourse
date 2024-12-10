export const useCustomError = (error, callback) => {
    // ถ้า error ที่ได้มา >= 400 หมายถึง error ที่เกิดจาก client ไม่ใช่ server
    if (error.statusCode >= 400 && error.statusCode < 500) {
        return callback(error);
    }
    
    // แต่ถ้า error ที่ได้มา >= 500 หมายถึง error ที่เกิดจาก server
    throw new Error(error);
}