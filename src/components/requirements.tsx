import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, Typography } from '@mui/material';

interface IContentRequirements {
  title: string;
  description: string;
  keywords: string[];
  targetAudience: string;
}

const contentRequirementsSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().min(50, 'Description must be at least 50 characters').max(250, 'Description cannot exceed 250 characters'),
  keywords: yup.array().of(yup.string()).min(3, 'At least 3 keywords are required').required(),
  targetAudience: yup.string().required('Target audience is required')
});

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IContentRequirements>({
    resolver: yupResolver(contentRequirementsSchema)
  });

  const onSubmit = (data: IContentRequirements) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Typography variant="h4" gutterBottom>
        Gather Content Requirements
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <TextField
          {...register('title')}
          label="Title"
          placeholder="Enter title"
          fullWidth
          margin="normal"
          error={!!errors.title}
          helperText={errors.title?.message}
          aria-label="content-title"
          inputMode="text"
          autoComplete="off"
        />
        <TextField
          {...register('description')}
          label="Description"
          placeholder="Enter description"
          fullWidth
          margin="normal"
          error={!!errors.description}
          helperText={errors.description?.message}
          aria-label="content-description"
          inputMode="text"
          autoComplete="off"
        />
        <TextField
          {...register('keywords', { value: [], shouldUnset: true })}
          label="Keywords (comma separated)"
          placeholder="Enter keywords"
          fullWidth
          margin="normal"
          error={!!errors.keywords}
          helperText={errors.keywords?.message}
          aria-label="content-keywords"
          inputMode="text"
          autoComplete="off"
        />
        <TextField
          {...register('targetAudience')}
          label="Target Audience"
          placeholder="Enter target audience"
          fullWidth
          margin="normal"
          error={!!errors.targetAudience}
          helperText={errors.targetAudience?.message}
          aria-label="content-target-audience"
          inputMode="text"
          autoComplete="off"
        />
        <Button type="submit" variant="contained" color="primary" disabled={loading} className="mt-4">
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, Typography } from '@mui/material';

interface IContentRequirements {
  title: string;
  description: string;
  keywords: string[];
  targetAudience: string;
}

const contentRequirementsSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().min(50, 'Description must be at least 50 characters').max(250, 'Description cannot exceed 250 characters'),
  keywords: yup.array().of(yup.string()).min(3, 'At least 3 keywords are required').required(),
  targetAudience: yup.string().required('Target audience is required')
});

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IContentRequirements>({
    resolver: yupResolver(contentRequirementsSchema)
  });

  const onSubmit = (data: IContentRequirements) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Typography variant="h4" gutterBottom>
        Gather Content Requirements
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <TextField
          {...register('title')}
          label="Title"
          placeholder="Enter title"
          fullWidth
          margin="normal"
          error={!!errors.title}
          helperText={errors.title?.message}
          aria-label="content-title"
          inputMode="text"
          autoComplete="off"
        />
        <TextField
          {...register('description')}
          label="Description"
          placeholder="Enter description"
          fullWidth
          margin="normal"
          error={!!errors.description}
          helperText={errors.description?.message}
          aria-label="content-description"
          inputMode="text"
          autoComplete="off"
        />
        <TextField
          {...register('keywords', { value: [], shouldUnset: true })}
          label="Keywords (comma separated)"
          placeholder="Enter keywords"
          fullWidth
          margin="normal"
          error={!!errors.keywords}
          helperText={errors.keywords?.message}
          aria-label="content-keywords"
          inputMode="text"
          autoComplete="off"
        />
        <TextField
          {...register('targetAudience')}
          label="Target Audience"
          placeholder="Enter target audience"
          fullWidth
          margin="normal"
          error={!!errors.targetAudience}
          helperText={errors.targetAudience?.message}
          aria-label="content-target-audience"
          inputMode="text"
          autoComplete="off"
        />
        <Button type="submit" variant="contained" color="primary" disabled={loading} className="mt-4">
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default GatherRequirements;