"use client";
import React, { useState } from "react";
import { Box, Button, Grid, StepButton } from "@mui/material";
import BDLockModal from "@/components/Shared/Modal";
import BDLockForm from "@/components/Forms/Form";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Typography from '@mui/material/Typography';
import BDLockInput from "@/components/Forms/Input";
import BDLockTextArea from "@/components/Forms/TextArea";
import FileUploadWithIcon from "@/components/Forms/Upload";
import { Save } from "@mui/icons-material";
import { green, grey, red } from "@mui/material/colors";

const steps = ['About', 'Welcome', 'Workers', 'Diagnostic', 'Partner'];

const StepContent = ({ stepIndex }: { stepIndex: number }) => {

  const [abouts, setAbout] = useState<string[]>([""]);
  const [welcome, setWelcome] = useState<string[]>([""]);
  const [workers, setWorkers] = useState<string[]>([""]);

  const handleAddAbout = () => {
    setAbout([...abouts, ""]);
  };


  const handleDeleteAbout = (aboutindex: number) => {
    if (abouts.length > 1) {
      const updatedAbout = abouts.filter((_, i) => i !== aboutindex);
      setAbout(updatedAbout);
    }
  };



  const handleAddWelcome = () => {
    setWelcome([...welcome, ""]);
  };


  const handleDeleteWelcome = (welcomeindex: number) => {
    if (welcome.length > 1) {
      const updatedWelcome = welcome.filter((_, i) => i !== welcomeindex);
      setWelcome(updatedWelcome);
    }
  };


  const handleAddWorkers = () => {
    setWorkers([...workers, ""]);
  };


  const handleDeleteWorkers = (index: number) => {
    if (workers.length > 1) {
      const updatedWorkers = workers.filter((_, i) => i !== index);
      setWorkers(updatedWorkers);
    }
  };




  const handleSubmit = () => {
    console.log()
  }



  switch (stepIndex) {
    case 0:
      return (
        <Box sx={{ my: 2, border: 1, borderColor: grey[300], borderRadius: 2, p: 2 }}>
          <Typography variant="h6" gutterBottom>About Information</Typography>

          <BDLockForm onSubmit={handleSubmit}>
            <BDLockInput name="maintitle" label="Main Title" fullWidth />
            <BDLockTextArea name="description" label="Description" />

            <div className=" border rounded-lg border-gray-300 mt-1 bg-gray-100 ">
              {abouts.map((_, aboutindex) => (
                <>
                  <div className="p-2">
                    <div
                      key={aboutindex}
                      className="flex gap-2 items-center content-center "
                    >
                      <label className="form-control w-full">
                        <Box
                          sx={{
                            width: "100%",
                            maxWidth: "100%",
                          }}
                        >
                          <BDLockInput
                            name={`subcategories[${aboutindex}].title`}
                            label="Title"
                            fullWidth
                            sx={{ bgcolor: "white" }}
                          />
                          <BDLockTextArea
                            name={`subcategories[${aboutindex}].description`}
                            label="Description"
                            sx={{ bgcolor: "white" }}
                          />
                        </Box>
                      </label>
                    </div>


                    <div className="flex justify-end gap-3">
                      <div>
                        <Button
                          onClick={() => handleDeleteAbout(aboutindex)}
                          sx={{
                            color: red[600],
                            backgroundColor: red[100],
                            "&:hover": {
                              backgroundColor: red[200],
                            },
                          }}
                        >
                          - Remove
                        </Button>
                      </div>
                      <div>
                        <Button onClick={handleAddAbout}
                          sx={{
                            color: green[600],
                            backgroundColor: green[100],
                            "&:hover": {
                              backgroundColor: green[200],
                            },
                          }}>
                          + Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <BDLockInput name="link" label="Youtube Link" fullWidth />
            <div className="flex gap-2">
              <FileUploadWithIcon name="about" label="About 1st Photo" />
              <FileUploadWithIcon name="about2nd" label="About 2nd Photo" />
            </div>
          </BDLockForm>
        </Box>
      );
    case 1:
      return (
        <Box sx={{ my: 2, border: 1, borderColor: grey[300], borderRadius: 2, p: 2 }}>
          <Typography variant="h6" gutterBottom>Welcome Message</Typography>
          <BDLockForm onSubmit={handleSubmit}>
            <BDLockInput name="maintitle" label="Main Title" fullWidth />
            <BDLockTextArea name="description" label="Description" />

            <div className=" border rounded-lg border-gray-300 mt-1 bg-gray-100 ">
              {welcome.map((_, welcomeindex) => (
                <>
                  <div className="p-2">
                    <div
                      key={welcomeindex}
                      className="flex gap-2 items-center content-center "
                    >
                      <label className="form-control w-full">
                        <Box
                          sx={{
                            width: "100%",
                            maxWidth: "100%",
                          }}
                        >
                          <BDLockInput
                            name={`welcome[${welcomeindex}].title`}
                            label="Title"
                            fullWidth
                            sx={{ bgcolor: "white" }}
                          />
                          <BDLockTextArea
                            name={`welcome[${welcomeindex}].description`}
                            label="Description"
                            sx={{ bgcolor: "white" }}
                          />
                        </Box>
                      </label>
                    </div>


                    <div className="flex justify-end gap-3">
                      <div>
                        <Button
                          onClick={() => handleDeleteWelcome(welcomeindex)}
                          sx={{
                            color: red[600],
                            backgroundColor: red[100],
                            "&:hover": {
                              backgroundColor: red[200],
                            },
                          }}
                        >
                          - Remove
                        </Button>
                      </div>
                      <div>
                        <Button onClick={handleAddWelcome}
                          sx={{
                            color: green[600],
                            backgroundColor: green[100],
                            "&:hover": {
                              backgroundColor: green[200],
                            },
                          }}>

                          + Add

                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="flex gap-2 mt-2">
              <FileUploadWithIcon name="about" label="About 1st Photo" />
              <FileUploadWithIcon name="about2nd" label="About 2nd Photo" />
            </div>


          </BDLockForm>
        </Box>
      );
    case 2:
      return (
        <Box sx={{ my: 2, border: 1, borderColor: grey[300], borderRadius: 2, p: 2 }}>
          <Typography variant="h6" gutterBottom>Workers Information</Typography>
          <BDLockForm onSubmit={handleSubmit}>
            {workers.map((_, workerindex) => (
              <>
                <div className="bg-gray-100 p-2 rounded-xl border border-gray-100" key={workerindex}>
                  <div className="grid grid-cols-2 gap-2 bg-gray-100 p-2">
                    <BDLockInput name="name" label="Name" fullWidth />
                    <BDLockInput name="designation" label="Designation" fullWidth />
                    <BDLockInput name="facebook" label="Facebook" fullWidth />
                    <BDLockInput name="twitter" label="Twitter" fullWidth />
                    <BDLockInput name="linkedIn" label="LinkedIn" fullWidth />
                    <BDLockInput name="instagram" label="Instagram" fullWidth />
                  </div>
                  <FileUploadWithIcon name="workerPhoto" label="Worker Photo" />
                </div>
                <div className="flex justify-end gap-3">
                  <div>
                    <Button
                      onClick={() => handleDeleteWorkers(workerindex)}
                      sx={{
                        color: red[600],
                        backgroundColor: red[100],
                        "&:hover": {
                          backgroundColor: red[200],
                        },
                      }}
                    >
                      - Remove
                    </Button>
                  </div>
                  <div>
                    <Button onClick={handleAddWorkers}
                      sx={{
                        color: green[600],
                        backgroundColor: green[100],
                        "&:hover": {
                          backgroundColor: green[200],
                        },
                      }}>

                      + Add

                    </Button>
                  </div>
                </div>
              </>
            ))}
          </BDLockForm>
        </Box>
      );
    case 3:
      return (
        <Box sx={{ my: 2, border: 1, borderColor: grey[300], borderRadius: 2, p: 2 }}>
          <Typography variant="h6" gutterBottom>Diagnostic Settings</Typography>
          <BDLockForm onSubmit={handleSubmit}>
            <BDLockInput name="title" label="Title" fullWidth />
            <BDLockTextArea name="description" label="Description" />
            <FileUploadWithIcon name="teacherPhoto" label="Banner Image" />
          </BDLockForm>
        </Box>
      );
    case 4:
      return (
        <Box sx={{ my: 2, border: 1, borderColor: grey[300], borderRadius: 2, p: 2 }}>
          <Typography variant="h6" gutterBottom>Partner Information</Typography>
          <BDLockForm onSubmit={handleSubmit}>
            <FileUploadWithIcon name="teacherPhoto" label="Partner Logo" />
          </BDLockForm>
        </Box>
      );
    default:
      return null;
  }
};

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const EditModal = ({ open, setOpen }: TProps) => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ?
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };



  return (
    <BDLockModal
      sx={{ width: "800px", margin: " auto" }}
      open={open}
      setOpen={setOpen}
      title="Edit & Update About"
    >
      <Box padding="5px 10px 10px 10px">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ width: '100%' }} >
              <Stepper nonLinear activeStep={activeStep} sx={{ boxShadow: 1, borderRadius: 2, p: 2, bgcolor: "#dcdcdc", position: "fixed", width: "670px" }} >
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index]}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                      {label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
              <div className="pt-[60px]">
                {allStepsCompleted() ? (
                  <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button onClick={handleReset}>Reset</Button>
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <StepContent stepIndex={activeStep} />
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button onClick={handleNext} sx={{ mr: 1 }}>
                        Next
                      </Button>

                      {/* <Button sx={{ borderRadius: 6 }} color="success" variant="contained"><Save />Save</Button> */}

                      <Button onClick={handleComplete} sx={{ borderRadius: 6 }} color="success" variant="contained">
                        <Save sx={{ height: 20, width: 20, mr: 1 }} />
                        {completedSteps() === totalSteps() - 1
                          ? 'Finish'
                          : 'Save'}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </BDLockModal>
  );
};


export default EditModal;
