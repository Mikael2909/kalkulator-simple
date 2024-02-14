"use client"
import { Button } from 'flowbite-react';
import NavbarComp from "@/Components/NavbarComp"
import { useRouter } from "next/navigation"
import { FloatingLabel } from 'flowbite-react';
import { useRef, useState } from "react"

const page = () => {
  const router = useRouter()
  const checkinput=useRef(null)
  const [num,setNum]= useState('')
  const [result,setResult]=useState(null)
  const handleResult = async (e) => {
    e.preventDefault();

    // Cek apakah nilai num kosong
    if (num === '' || isNaN(num)) {
      alert('Masukkan angka terlebih dahulu.');
      return;
    }

    // Lakukan perhitungan (num dikali 2 dibagi 3)
    const calculationResult = (parseFloat(num) * 0.2*35.5*100) / 1000;
    
    // Set hasil perhitungan ke dalam state result
    setResult(Number(calculationResult.toFixed(3)));
    checkinput.current.value=''
    router.refresh()
    console.log(checkinput)
  };

  const handleReset = () => {
    // Reset nilai input dan hasil perhitungan
    
    setNum('');
    setResult(null);
    
  };
  return (
    <>
    <NavbarComp/>
    <div className="flex justify-center items-center mb-5 pt-5">
    <h1 className="font-bold text-2xl ">Mengukur Kadar Klorin</h1> 
    
    </div>
    <form className="flex justify-center flex-col items-center" onSubmit={handleResult}>
      
      <FloatingLabel variant="outlined" label="Volume Larutan" ref={checkinput} name="name"value={num} onChange={(e) => setNum(e.target.value)} required />
      <div className="pt-5 flex justify-between flex-col gap-2">

      <Button type="submit " color="success">Submit</Button>
      
      <Button onClick={handleReset} color="blue">Reset</Button>
      </div>
    </form>
     {/* Menampilkan hasil perhitungan jika sudah ada */}
     {result !== null && (
        <p className="text-center font-bold">
         Kadar Klorin Terkandung: {result} %
        </p>
      )}
    </>

  )
}

export default page
