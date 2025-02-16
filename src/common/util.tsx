export function formatNumberToK(number: number): string {
    if (number >= 1000) {
        const valueInK = (number / 1000).toFixed(1); // แบ่งด้วย 1000 และปัดทศนิยม 1 ตำแหน่ง
        return `${valueInK}k`; // แสดงผลในรูปแบบ 'k'
    }
    return number.toString(); // ถ้าไม่ถึง 1000 ก็แสดงตัวเลขปกติ
}
