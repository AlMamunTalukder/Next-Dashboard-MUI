/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react"
import { useState } from "react"
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  InputAdornment,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  alpha,
} from "@mui/material"
import {
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material"
import { Roboto } from "next/font/google"
import Image from "next/image"
import img from "../../../../../assets/img/about/banner.jpeg"
import ShowModal from "../_components/ShowModal"
import EditModal from "../_components/EditModal"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#6366f1",
      light: "#818cf8",
      dark: "#4f46e5",
    },
    secondary: {
      main: "#ec4899",
      light: "#f472b6",
      dark: "#db2777",
    },
    background: {
      default: "#f9fafb",
      paper: "#ffffff",
    },
    success: {
      main: "#10b981",
      light: "#34d399",
      dark: "#059669",
    },
    warning: {
      main: "#f59e0b",
      light: "#fbbf24",
      dark: "#d97706",
    },
    error: {
      main: "#ef4444",
      light: "#f87171",
      dark: "#dc2626",
    },
    info: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#2563eb",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "10px 20px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 4px 8px rgba(99, 102, 241, 0.2)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          overflow: "visible",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          padding: "16px",
        },
        head: {
          fontWeight: 600,
          backgroundColor: "rgba(99, 102, 241, 0.04)",
          color: "#6366f1",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(99, 102, 241, 0.04)",
          },
          "&:last-child td": {
            borderBottom: 0,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
})

// Static data for classes
const staticClassesData = [
  {
    id: 1,
    location:"Home Page",
    code: "B-101",   
    title: "Dr. Smith",
    img:img
  },
  {
    id: 2,
    location:"About Page",
    code: "B-102",
    title: "Prof. Johnson",
    img:img
  },
  {
    id: 3,
    location:"About Page",
    code: "B-103",
    title: "Mrs. Williams",
    img:img
  },
  {
    id: 4,
    location:"About Page",
    code: "B-104",
    title: "Mr. Brown",
    img:img
  },
  {
    id: 5,
    location:"About Page",
    code: "B-105",
    title: "Ms. Davis",
    img:img
  },
]

export default function ClassesListPage() {
  const [classes] = useState<any[]>(staticClassesData)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState<any | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [showOpen, setShowOpen] = React.useState(false)

  const handleShowOpen = () => setShowOpen(true)
  const handleShowClose = () => setShowOpen(false)

  const [editOpen, setEditOpen] = React.useState(false)
  const handleEditOpen = () => setEditOpen(true)
  const handleEditClose = () => setEditOpen(false)


  const theme = customTheme
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setPage(0)
  }

  const handleDeleteClick = (classItem: any) => {
    setSelectedClass(classItem)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = () => {
    // In a real app, you would call an API here
    setDeleteDialogOpen(false)
    setSelectedClass(null)
  }

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false)
  }

  const filteredClasses = classes.filter(
    (classItem) =>
      searchTerm === "" ||
      classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const paginatedClasses = filteredClasses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <>


      <ThemeProvider theme={theme}>
        <div className="shadow-md rounded-lg">
          <Paper elevation={0} sx={{ mb: 4, overflow: "hidden", borderRadius: 2 }}>
            <div className="flex items-center content-center justify-between border-b border-b-blue-100 gap-5 p-3">
              <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
                About
              </Typography>
              <div className="flex items-center content-center justify-end gap-5 p-3">
                <div>
                  <TextField
                    placeholder="Search By Sl. No., Heading, Title..."
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon color="action" />
                        </InputAdornment>
                      ),
                      sx: {
                        width: 400,
                        borderRadius: 2,
                      },
                    }}
                  />
                </div>
              </div>
            </div>


            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow >
                  <TableCell sx={{ color: "primary.main", }}>Location</TableCell>
                  <TableCell sx={{ color: "primary.main", }}>Title</TableCell>
                  <TableCell sx={{ color: "primary.main", }}>Images</TableCell>
                  <TableCell align="right" sx={{ color: "primary.main", pr: 6 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedClasses.map((classItem) => (
                  <TableRow key={classItem.id}>
                    <TableCell>
                      <Chip
                        label={classItem.location}
                        size="small"
                        sx={{
                          bgcolor: "rgba(99, 102, 241, 0.08)",
                          color: "primary.main",
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" >
                        {classItem.title}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Image src={classItem.img} height={50} width={50} alt="class image" />
                    </TableCell>
                    <TableCell >
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        {!isMobile && (
                          <>
                            <Tooltip title="View Details" onClick={handleShowOpen}>
                              <IconButton
                                size="small"
                                sx={{
                                  color: "info.main",
                                  bgcolor: alpha(theme.palette.info.main, 0.1),
                                  mr: 1,
                                  "&:hover": {
                                    bgcolor: alpha(theme.palette.info.main, 0.2),
                                  },
                                }}
                              >
                                <VisibilityIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Edit" onClick={handleEditOpen}>
                              <IconButton
                                size="small"
                                sx={{
                                  color: "warning.main",
                                  bgcolor: alpha(theme.palette.warning.main, 0.1),
                                  mr: 1,
                                  "&:hover": {
                                    bgcolor: alpha(theme.palette.warning.main, 0.2),
                                  },
                                }}
                              >
                                <EditIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete">
                              <IconButton
                                size="small"
                                sx={{
                                  color: "error.main",
                                  bgcolor: alpha(theme.palette.error.main, 0.1),
                                  mr: 1,
                                  "&:hover": {
                                    bgcolor: alpha(theme.palette.error.main, 0.2),
                                  },
                                }}
                                onClick={() => handleDeleteClick(classItem)}
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <TablePagination
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={filteredClasses.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteDialogOpen}
          onClose={handleDeleteCancel}
          PaperProps={{
            sx: {
              borderRadius: 3,
              width: "100%",
              maxWidth: 480,
            },
          }}
        >
          <DialogTitle sx={{ pb: 1 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Delete Banner
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete the Banner &#34;{selectedClass?.title}&#34;?
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button onClick={handleDeleteCancel} variant="outlined">
              Cancel
            </Button>
            <Button onClick={handleDeleteConfirm} variant="contained" color="error" sx={{ ml: 2 }}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
      
      {showOpen && <ShowModal open={showOpen} setOpen={handleShowClose} />}
      {editOpen && <EditModal open={editOpen} setOpen={handleEditClose} />}

    </>
  )
}