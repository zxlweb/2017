let bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
// 将buffer对象=>utf-8 字符串
let str = bin.toString('utf-8');

// 字符串=>Buffer
let bin2 = new Buffer('hello', 'utf-8');

// Buffer.copy()
let bin3 = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
let bin4 = Buffer.alloc(bin2.length);
bin3.copy(bin4);
bin4[0] = 0x40;
console.log(bin3, bin4);

