import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { fetchSiteOrderStart } from '../../redux/site-orders/site_order.actions';
import { selectSiteOrderList } from '../../redux/site-orders/site_order.selector';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { getCurrentDate } from "../../utils/getCurrentDate";
import { delSiteOrderStart } from '../../redux/site-orders/site_order.actions';
import { addMainOrderStart } from '../../redux/main-order/main_order.actions';

//Icon import
import BusinessIcon from '@material-ui/icons/Business';

const columns = [
	{ id: 'part_number', label: 'Part Number', minWidth: 100 },
	{ id: 'description', label: 'Description', minWidth: 100 },
	{
		id: 'vendor_name',
		label: 'Vendor Name',
		minWidth: 100,
	},
	{
		id: 'quantity',
		label: 'Quantity',
		minWidth: 100,
	},
	{
		id: 'unit_price',
		label: 'Unit Price',
		minWidth: 100,
	},
	{
		id: 'line_number',
		label: 'Line Number',
		minWidth: 100,
	},
	{
		id: 'pr_number',
		label: 'PR Number',
		minWidth: 100,
	},
	{
		id: 'total_price',
		label: 'Total Price',
		minWidth: 100,
	},
	{
		id: 'site_name',
		label: 'Site Name',
		minWidth: 100,
	},
	{
		id: 'month',
		label: 'Month',
		minWidth: 100,
	},
	{
		id: 'actions',
		label: 'Actions',
		minWidth: 110,
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 440,
	},
	customTable: {
		'& .MuiTableCell-stickyHeader': {
			backgroundColor: theme.palette.primary.main,
		},
	},
  icon: {
    color: '#000',
    '&:hover': {
      cursor: 'pointer',
      color: '#D90429',
  }
  },
}));

export default function StickyHeadTable() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [search, setSearch] = React.useState('');

	const siteOrderData = useSelector((state) => selectSiteOrderList(state));

	console.log('Here is the sparepart data', siteOrderData);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleBlur = (event) => {
		console.log(event.target.value);
		setSearch(event.target.value);
	};

  useEffect(() => {
		dispatch(
			fetchSiteOrderStart({
				pageNo: page,
				rowsPerPage: rowsPerPage,
				searchstr: search,
			})
		);
	}, [page, rowsPerPage, search]);

  const handleSubmit = (row) => (event) => {
    event.preventDefault();
    console.log(row);
    console.log(row.quantity);
    row.month = getCurrentDate();
    //addSiteOrderStart, delSiteOrderStart
    dispatch(addMainOrderStart({
		"part_number": row.part_number,
		"description": row.description,
		"vendor_name": row.vendor_name,
		"unit_price": parseFloat(row.unit_price),
		"quantity": parseFloat(row.quantity),
		"total_price": parseFloat(row.total_price),
		"pr_number": row.pr_number,
		"line_number": parseFloat(row.line_number),
		"site_name": row.site_name,
		"month": row.month
}));
	dispatch(delSiteOrderStart(row.id));
  };


	return (
		<React.Fragment>
			<Grid container align='center' style={{ marginBottom: '1em' }}>
				<Grid item>
					<BusinessIcon fontSize='large' />
				</Grid>
				<Grid item>
					<Typography variant='h2' style={{ marginLeft: '0.5em' }}>
						{' '}
						Spare Part List
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				align='center'
				justify='space-between'
				style={{ marginBottom: '1em' }}
			>
				<Grid item>
					<TextField
						id='outlined-search'
						label='Search Sparepart'
						type='search'
						variant='outlined'
						onBlur={handleBlur}
					/>
				</Grid>
			</Grid>
			<Paper className={classes.root}>
				<TableContainer className={classes.container}>
					<Table
						stickyHeader
						aria-label='sticky table'
						classes={{ root: classes.customTable }}
					>
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{ minWidth: column.minWidth, color: '#fff' }}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{siteOrderData.results
								? siteOrderData.results.map((row) => {
										return (
											<TableRow hover key={row.id}>
												<TableCell>{row.part_number}</TableCell>
												<TableCell>{row.description}</TableCell>
												<TableCell>{row.vendor_name}</TableCell>
												<TableCell>{row.quantity}</TableCell>
												<TableCell>{row.unit_price}</TableCell>
												<TableCell>{row.line_number}</TableCell>
												<TableCell>{row.pr_number}</TableCell>
												<TableCell>{row.total_price}</TableCell>
												<TableCell>{row.site_name}</TableCell>
												<TableCell>{getCurrentDate()}</TableCell>
												<TableCell>
                          <Grid container spacing={2}>
                            <Grid item>
                            <AddCircleIcon className={classes.icon} onClick={handleSubmit(row)} />
                            </Grid>
                            <Grid item>
                            <EditIcon className={classes.icon} onClick={handleSubmit(row)} />
                            </Grid>
                          </Grid>
                        
                        
												</TableCell>
											</TableRow>
										);
								  })
								: ''}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component='div'
					count={siteOrderData.count}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</React.Fragment>
	);
}
