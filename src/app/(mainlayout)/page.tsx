/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Box,
  Container,
  Fade,
  createTheme,
  ThemeProvider,
  Button,
  MenuItem,
  Divider,
  Menu,
  Typography,
  TextField,
  Grid,
  InputAdornment,
  IconButton,
  Badge,
  Avatar,
  alpha,
} from "@mui/material"

import { Roboto } from "next/font/google"
import { Help, Logout, Notifications, Search, Settings } from "@mui/icons-material"

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

// Sample data for classes
const generateClassesData = () => {
  const statuses = ["Yes", "NO", "Partial"]
  const classes = ["1", "2", "3", "4", "5", "6"]
  const subjects = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "ICT",
    "Physics",
    "Chemistry",
    "Biology",
    "Music",
  ]
  const teachers = [
    { name: "Dr. Smith", avatar: "S" },
    { name: "Prof. Johnson", avatar: "J" },
    { name: "Mrs. Williams", avatar: "W" },
    { name: "Mr. Brown", avatar: "B" },
    { name: "Ms. Davis", avatar: "D" },
  ]

  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    code: `CLS-${Math.floor(1000 + Math.random() * 9000)}`,
    name: `${subjects[Math.floor(Math.random() * subjects.length)]} ${Math.floor(Math.random() * 12) + 1}`,
    class: classes[Math.floor(Math.random() * classes.length)],
    students: Math.floor(Math.random() * 40) + 10,
    teacher: teachers[Math.floor(Math.random() * teachers.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
    lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 1000000000)),
  }))
}

export default function ClassesListPage() {
  const [classes, setClasses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshKey, setRefreshKey] = useState(0)


  const theme = customTheme

  useEffect(() => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setClasses(generateClassesData())
      setLoading(false)
    }, 1000)
  }, [refreshKey])



  // Current date
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="bg-[#F0F3FF] h-full rounded-2xl p-3">
        <div>

          <div className="flex justify-between items-center mb-4 flex-col md:flex-row gap-2">

            <div>
              <h1 className="font-bold text-4xl">Dashboard</h1>
              <h1 className="text-sm text-[#9AA6B2]"> {currentDate}</h1>
            </div>
            <div>
              <TextField
                fullWidth
                placeholder="Search..."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search color="action" />
                    </InputAdornment>
                  ),
                }}
                className="rounded-lg"
              />
            </div>
            <div className="flex gap-1">

            </div>

          </div>
        </div>

        <div>
          <div className=""></div>
        </div>
      </div>

    </ThemeProvider>
  )
}
