import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';
import { useDarkMode } from '../../Components/Dark/DarkModeContext'; 

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
);

function Chart() {
    const { incomes, expenses } = useGlobalContext();
    const { darkMode } = useDarkMode(); // Access darkMode state from context

    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return dateFormat(date);
        }),
        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => income.amount),
                backgroundColor: darkMode ? 'rgba(75, 192, 192, 0.2)' : 'rgba(54, 162, 235, 0.2)',
                borderColor: darkMode ? 'rgba(75, 192, 192, 1)' : 'rgba(54, 162, 235, 1)',
                tension: 0.2
            },
            {
                label: 'Expenses',
                data: expenses.map((expense) => expense.amount),
                backgroundColor: darkMode ? 'rgba(255, 99, 132, 0.2)' : 'rgba(255, 99, 132, 0.2)',
                borderColor: darkMode ? 'rgba(255, 99, 132, 1)' : 'rgba(255, 99, 132, 1)',
                tension: 0.2
            }
        ]
    };

    return (
        <ChartStyled darkMode={darkMode}>
            <Line data={data} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: ${({ darkMode }) => (darkMode ? '#333' : '#FCF6F9')};
    border: 2px solid ${({ darkMode }) => (darkMode ? '#444' : '#FFFFFF')};
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart;
