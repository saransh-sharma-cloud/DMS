// material-ui
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    type: 'number',
    width: 100,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, rating: 4.5 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, rating: 4.1 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, rating: 2.0 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, rating: 3.0 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, rating: 5.0 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, rating: 1.8 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, rating: 4.4 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, rating: 3.9 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, rating: 2.6 },
];

const paginationModel = { page: 0, pageSize: 5 };


export default function Documentation() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid sx={{ mb: -2.25 }} size={{ xs: 12 }}>
        <Typography variant="h5">Documentation</Typography>
      </Grid>

      <Grid size={{ xs: 6 }}>
        <Paper sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: { paginationModel },
              filter: {
                filterModel: {
                  items: [
                    {
                      field: 'firstName', 
                      operator: 'contains',  
                      value: '', 
                    },
                  ],
                },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}