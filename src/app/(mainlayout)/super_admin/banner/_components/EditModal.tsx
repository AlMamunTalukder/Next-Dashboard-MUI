"use client";
import React from "react";
import { Box, Button, Grid } from "@mui/material";
import BDLockModal from "@/components/Shared/Modal";
import BDLockForm from "@/components/Forms/Form";
import BDLockInput from "@/components/Forms/Input";
import BDLockTextArea from "@/components/Forms/TextArea";
import FileUploadWithIcon from "@/components/Forms/Upload";
import { Save } from "@mui/icons-material";


export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const EditModal = ({  open, setOpen }: TProps) => {
  const handleSubmit = () => {
    console.log()
  }
  return (
    <BDLockModal
      sx={{ width: "800px", margin: " auto" }}
      open={open}
      setOpen={setOpen}
      title="Edit Banner"
    >
      <Box padding="5px 10px 10px 10px">
        {/* all content */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="bg-white">
              <BDLockForm onSubmit={handleSubmit}>
                <BDLockInput name="heading" label="Heading" fullWidth />
                <BDLockInput name="title" label="Title" fullWidth />
                <BDLockTextArea name="subtitle" label="Sub Title" />
                <FileUploadWithIcon name="teacherPhoto" label="Banner Image" />


            <div className="mt-2 flex justify-end gap-2">
                  <Button variant="outlined" color="error" sx={{ borderRadius:6 }}>Cancle</Button>
                  <Button sx={{ borderRadius:6}} color="success" variant="contained"><Save/>Save</Button>
                  </div>
              </BDLockForm>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </BDLockModal>
  );
};


export default EditModal;
