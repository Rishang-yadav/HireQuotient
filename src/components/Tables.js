
import {
    Table, TableBody,
    TableCell, TableContainer, TableHead,
    TableRow, Paper, Accordion, AccordionSummary, AccordionDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Tables(prop) {
    let holdings = prop.holdings;

    const groupHoldingsByAssetClass = () => {
        const groupedHoldings = {};

        holdings.forEach(holding => {
            if (!groupedHoldings[holding.asset_class]) {
                groupedHoldings[holding.asset_class] = [];
            }
            groupedHoldings[holding.asset_class].push(holding);
        });

        return groupedHoldings;
    };

    return (
        <div>
            <div>
                {Object.entries(groupHoldingsByAssetClass()).map(([assetClass, holdings]) => (
                    <Accordion key={assetClass}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon className='text-blue-600' />}>
                            <TableCell className='text-blue-600'>{assetClass}</TableCell>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>NAME OF THE HOLDINGS </TableCell>
                                            <TableCell>TICKER</TableCell>
                                            <TableCell>AVERAGE PRICE</TableCell>
                                            <TableCell>MARKET PRICE</TableCell>
                                            <TableCell>LATEST CHANGE IN PERCENTAGE</TableCell>
                                            <TableCell>MARKET VALUE BASE CCY</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {holdings.map(holding => (
                                            <TableRow key={holding.name}>
                                                <TableCell>{holding.name}</TableCell>
                                                <TableCell>{holding.ticker}</TableCell>
                                                <TableCell>{holding.avg_price}</TableCell>
                                                <TableCell>{holding.market_price}</TableCell>
                                                <TableCell>{holding.latest_chg_pct}</TableCell>
                                                <TableCell>{holding.market_value_ccy}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}

export default Tables;