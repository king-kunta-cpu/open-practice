// Minimal store-only ZIP writer (no compression, no dependencies). Enough for small starter projects.
const table=(()=>{const t=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0}return t})();
export function crc32(bytes){let c=0xFFFFFFFF;for(let i=0;i<bytes.length;i++)c=table[(c^bytes[i])&0xFF]^(c>>>8);return (c^0xFFFFFFFF)>>>0}
export function makeZip(files){
 const enc=new TextEncoder(),parts=[],central=[];let offset=0;
 const now=new Date(),time=(now.getHours()<<11)|(now.getMinutes()<<5)|(now.getSeconds()>>1),date=((now.getFullYear()-1980)<<9)|((now.getMonth()+1)<<5)|now.getDate();
 for(const [name,content] of Object.entries(files)){
  const nameBytes=enc.encode(name.replace(/^\/+/,'')),data=typeof content==='string'?enc.encode(content):content,crc=crc32(data);
  const local=new DataView(new ArrayBuffer(30));
  local.setUint32(0,0x04034b50,true);local.setUint16(4,20,true);local.setUint16(6,0x0800,true);local.setUint16(8,0,true);local.setUint16(10,time,true);local.setUint16(12,date,true);local.setUint32(14,crc,true);local.setUint32(18,data.length,true);local.setUint32(22,data.length,true);local.setUint16(26,nameBytes.length,true);local.setUint16(28,0,true);
  parts.push(new Uint8Array(local.buffer),nameBytes,data);
  const cd=new DataView(new ArrayBuffer(46));
  cd.setUint32(0,0x02014b50,true);cd.setUint16(4,20,true);cd.setUint16(6,20,true);cd.setUint16(8,0x0800,true);cd.setUint16(10,0,true);cd.setUint16(12,time,true);cd.setUint16(14,date,true);cd.setUint32(16,crc,true);cd.setUint32(20,data.length,true);cd.setUint32(24,data.length,true);cd.setUint16(28,nameBytes.length,true);cd.setUint32(42,offset,true);
  central.push(new Uint8Array(cd.buffer),nameBytes);
  offset+=30+nameBytes.length+data.length;
 }
 const size=central.reduce((n,p)=>n+p.length,0),end=new DataView(new ArrayBuffer(22)),count=Object.keys(files).length;
 end.setUint32(0,0x06054b50,true);end.setUint16(8,count,true);end.setUint16(10,count,true);end.setUint32(12,size,true);end.setUint32(16,offset,true);
 return new Blob([...parts,...central,new Uint8Array(end.buffer)],{type:'application/zip'});
}
