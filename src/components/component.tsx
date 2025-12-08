import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { CircularProgress, TextField, Button, Typography, Box, Paper } from '@mui/material';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch existing business specifications if needed
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<BusinessSpec>('https://api.example.com/business-specs', { name, description });
      alert(`Business specification created successfully with ID ${response.data.id}`);
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'An unexpected error occurred');
    }

    setLoading(false);
  };

  return (
    <Paper className="p-6 max-w-md mx-auto">
      <Typography variant="h5" component="h2" gutterBottom>
        Create Business Specification
      </Typography>
      {error && <Box mb={2} color="red">{error}</Box>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
          aria-label="business-spec-name"
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          required
          aria-label="business-spec-description"
        />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Create'}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { CircularProgress, TextField, Button, Typography, Box, Paper } from '@mui/material';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch existing business specifications if needed
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<BusinessSpec>('https://api.example.com/business-specs', { name, description });
      alert(`Business specification created successfully with ID ${response.data.id}`);
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'An unexpected error occurred');
    }

    setLoading(false);
  };

  return (
    <Paper className="p-6 max-w-md mx-auto">
      <Typography variant="h5" component="h2" gutterBottom>
        Create Business Specification
      </Typography>
      {error && <Box mb={2} color="red">{error}</Box>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
          aria-label="business-spec-name"
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          required
          aria-label="business-spec-description"
        />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Create'}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default CreateBusinessSpecification;