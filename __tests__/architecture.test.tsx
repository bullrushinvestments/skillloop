import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./external-dependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({ status: 'loading' });

    render(<DesignArchitectureComponent />);
    
    expect(await screen.findByText(/Loading.../i)).toBeInTheDocument();
  });

  test('renders error message when data fetching fails', async () => {
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({ status: 'error', error: new Error('Failed to fetch') });

    render(<DesignArchitectureComponent />);

    expect(await screen.findByText(/Error loading data/i)).toBeInTheDocument();
  });

  test('renders content when data is successfully fetched', async () => {
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({ status: 'success', data: { title: 'Sample Title' } });

    render(<DesignArchitectureComponent />);

    expect(await screen.findByText(/Sample Title/i)).toBeInTheDocument();
  });

  test('handles user interaction with buttons and links', async () => {
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({ status: 'success', data: { buttonText: 'Click Me' } });

    render(<DesignArchitectureComponent />);

    fireEvent.click(screen.getByText(/Click Me/i));
    
    // Assuming there's an event listener or a function that gets called on click
    expect(mockUseExternalData).toHaveBeenCalled();
  });

  test('tests accessibility features', async () => {
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({ status: 'success', data: { buttonText: 'Click Me' } });

    render(<DesignArchitectureComponent />);

    expect(screen.getByText(/Click Me/i)).toHaveAttribute('aria-label', 'clickable button');
    expect(screen.getByRole('button')).toBeEnabled();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./external-dependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({ status: 'loading' });

    render(<DesignArchitectureComponent />);
    
    expect(await screen.findByText(/Loading.../i)).toBeInTheDocument();
  });

  test('renders error message when data fetching fails', async () => {
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({ status: 'error', error: new Error('Failed to fetch') });

    render(<DesignArchitectureComponent />);

    expect(await screen.findByText(/Error loading data/i)).toBeInTheDocument();
  });

  test('renders content when data is successfully fetched', async () => {
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({ status: 'success', data: { title: 'Sample Title' } });

    render(<DesignArchitectureComponent />);

    expect(await screen.findByText(/Sample Title/i)).toBeInTheDocument();
  });

  test('handles user interaction with buttons and links', async () => {
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({ status: 'success', data: { buttonText: 'Click Me' } });

    render(<DesignArchitectureComponent />);

    fireEvent.click(screen.getByText(/Click Me/i));
    
    // Assuming there's an event listener or a function that gets called on click
    expect(mockUseExternalData).toHaveBeenCalled();
  });

  test('tests accessibility features', async () => {
    const mockUseExternalData = (useExternalData as unknown) as jest.Mock;
    mockUseExternalData.mockReturnValue({ status: 'success', data: { buttonText: 'Click Me' } });

    render(<DesignArchitectureComponent />);

    expect(screen.getByText(/Click Me/i)).toHaveAttribute('aria-label', 'clickable button');
    expect(screen.getByRole('button')).toBeEnabled();
  });
});