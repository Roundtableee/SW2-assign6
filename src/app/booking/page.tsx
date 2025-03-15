// src/app/booking/page.tsx (Next.js 13 App Router)
'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import DateReserve from '@/components/DateReserve';

export default function BookingPage() {
  // state สำหรับ select
  const [venue, setVenue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    alert(`Form submitted! Venue = ${venue}`);
  };

  return (
    <div className="bg-white min-h-screen">
    <Box sx={{ p: 4 }}>
      <form onSubmit={handleSubmit}>
        {/* TextField ชื่อ-นามสกุล */}
        <FormControl fullWidth margin="normal">
          <TextField
            variant="standard"
            name="Name-Lastname"
            label="Name-Lastname"
          />
        </FormControl>

        {/* TextField หมายเลขติดต่อ */}
        <FormControl fullWidth margin="normal">
          <TextField
            variant="standard"
            name="Contact-Number"
            label="Contact-Number"
          />
        </FormControl>

        {/* Select สำหรับเลือกสถานที่ */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select
            variant="standard"
            labelId="venue-label"
            id="venue"
            value={venue}
            label="Venue"
            onChange={(e) => setVenue(e.target.value)}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        {/* DatePicker สำหรับเลือกวันที่ (เรียกใช้จาก DateReserve.tsx) */}
        <FormControl fullWidth margin="normal">
          <DateReserve />
        </FormControl>

        {/* ปุ่ม submit ฟอร์ม */}
        <FormControl fullWidth margin="normal">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            name="Book Venue"
          >
            Book Venue
          </Button>
        </FormControl>
      </form>
    </Box>
    </div>
  );
}
