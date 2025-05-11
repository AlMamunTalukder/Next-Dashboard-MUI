"use client";
import BDLockModal from "@/components/Shared/Modal";
import { Box, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import img from "../../../../../assets/img/about/banner.jpeg"

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const ShowModal = ({ open, setOpen }: TProps) => {

  return (
    <BDLockModal
      sx={{ width: "800px", margin: " auto" }}
      open={open}
      setOpen={setOpen}
      title="Banner"
    >
      <Box padding="5px 10px 10px 10px">
        {/* all content */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="bg-white">                
            <div className="relative w-full h-full ">
              <Image
                src={img}
                alt="img"
                layout="fill"
                objectFit="cover"
                className="h-20 w-32"
              />
              <div className="absolute inset-0 bg-black opacity-30" />

              <div className="relative inset-0 flex flex-col items-center justify-center text-center text-white space-y-4 lg:space-y-10 lg:p-8">
                <h1>Drive With Confidence</h1>
                <h1 className="font-bold text-2xl">Reliable Auto Repair & Maintenance</h1>
                <h1>Born from a passion for cars and a promise of honesty — Trust Auto Solution is your one-stop garage for expert diagnostics, repairs, and preventive care.</h1>
                <Button
                    variant="contained"
                    className="bg-white text-black hover:bg-gray-200"
                  >
                    Get a Quote
                  </Button>
              </div>
            </div>
       
 
            </Box>
          </Grid>
        </Grid>
      </Box>
    </BDLockModal>
  );
};


export default ShowModal;
