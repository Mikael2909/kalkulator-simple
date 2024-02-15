"use client"
import { Button } from 'flowbite-react';
import NavbarComp from "@/Components/NavbarComp"
import { useRouter } from "next/navigation"
import { FloatingLabel } from 'flowbite-react';
import { useRef, useState } from "react"
import { Badge } from 'flowbite-react';
const page = () => {
  const router = useRouter()
  const checkinput=useRef(null)
  const [num,setNum]= useState('')
  const [isi,setIsi]= useState('')
  const [total,setTotal]= useState('')
  const [result,setResult]=useState(null)
  const handleResult = async (e) => {
    e.preventDefault();

    // Cek apakah nilai num kosong
    if (num === '' || isNaN(num)) {
      alert('Masukkan angka terlebih dahulu.');
      return;
    }
    const firstcheck=(parseFloat(num)+parseFloat(isi))
    const totalRes=(parseFloat(total))
    const totalIsi=(parseFloat(isi))
    const pembilang=firstcheck-totalRes
    // Lakukan perhitungan (num dikali 2 dibagi 3)
    const calculationResult = ((pembilang/totalIsi)*100);
    
    // Set hasil perhitungan ke dalam state result
    setResult(Number(calculationResult.toFixed(4)));
    checkinput.current.value=''
    router.refresh()
    console.log(checkinput)
  };

  const handleReset = () => {
    // Reset nilai input dan hasil perhitungan
    
    setNum('');
    setIsi('');
    setTotal('');
    setResult(null);
    
  };
  return (
    <>
    <NavbarComp/>
    <div className="flex justify-center items-center mb-5 pt-5">
    <h1 className="font-bold text-2xl ">Mengukur Kadar Air</h1> 
    
    </div>
    <form className="flex justify-center flex-col items-center" onSubmit={handleResult}>
      
      <FloatingLabel type="number" variant="outlined"  label="Berat Kosong Petri" ref={checkinput} name="name"value={num} onChange={(e) => setNum(e.target.value)} required/>
      <FloatingLabel type="number" variant="outlined" label="Berat Isi" ref={checkinput} name="name"value={isi} onChange={(e) => setIsi(e.target.value)} required />
      <FloatingLabel type= "number" variant="outlined" label="Berat Total" ref={checkinput} name="name"value={total} onChange={(e) => setTotal(e.target.value)} required/>
      <div className="pt-5 flex justify-between flex-col gap-2">

      <Button type="submit " color="success">Submit</Button>
      
      <Button onClick={handleReset} color="blue">Reset</Button>

      </div>
    </form>
 
     {/* Menampilkan hasil perhitungan jika sudah ada */}
     {result !== null && (
      <>
        <p className="text-center font-bold">
         Kadar Air Terkandung: {result} %
        </p>
        
       </>
      )}
    </>

  )
}

export default page
