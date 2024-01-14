//เขียน ฟังก์ชั่น เรียกลูกค้า คิวที่ 230 เชิญที่ช่องบริการ หมายเลข 3
function callToGet(QueueNumber, serviceNumber) {
    console.log("ลูกค้าคิวที่ " + QueueNumber + "เชิญที่ช่องบริการหมายเลข " + serviceNumber + "ค่ะ");  
    }
callToGet("203", "3");

/*ลูกค้า 1-4 ท่านรับคิว A มากกว่า 5 ท่านขึ้นไป รับคิว B
ชื่อตัวแปร = NumberofCustommer
สิ่งที่ต้องใช้คือ จำนวนลูกค้า + คิวที่ต้องรับ
logic = if ถ้าใส่ตัวเลข 1-4 แสดงผล A // ถ้าใส่ > 4 แสดงผล B ปล.ยังไม่ได้เรียนคำสั่ง
*/

function callToGetQueue(numberofcustomer, queueAB) {
    console.log("คุณลูกค้าจำนวน " + numberofcustomer + " ท่าน เชิญรับคิว " + queueAB);  
    }
callToGetQueue("5", "B");

