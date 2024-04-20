
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
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <TableCell>{assetClass}</TableCell>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Ticker</TableCell>
                                            <TableCell>Average Price</TableCell>
                                            <TableCell>Market Price</TableCell>
                                            <TableCell>Latest Change (%)</TableCell>
                                            <TableCell>Market Value (Base CCY)</TableCell>
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