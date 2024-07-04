import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';
import { useDarkMode } from '../../Components/Dark/DarkModeContext'; 

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();
    const { darkMode } = useDarkMode(); // Access darkMode state from context

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    return (
        <DashboardStyled darkMode={darkMode}>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p className={darkMode ? 'dark-mode-text' : ''}>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ₹{Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ₹{Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ₹{Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ₹{Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    .stats-con {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;

        .chart-con {
            grid-column: 1 / 4;
            height: 400px;

            .amount-con {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;

                .income, .expense, .balance {
                    background: ${({ darkMode }) => (darkMode ? '#333' : '#FCF6F9')};
                    color: ${({ darkMode }) => (darkMode ? '#FFF' : 'rgba(0, 0, 0, 0.8)')};
                    border: 2px solid ${({ darkMode }) => (darkMode ? '#444' : '#FFFFFF')};
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    p {
                        font-size: 3.5rem;
                        font-weight: 700;
                        margin-top: 0.5rem;
                    }

                    &.dark-mode-text {
                        color: var(--color-green); /* Example for dark mode specific color */
                    }
                }

                .balance {
                    grid-column: 2 / 4;
                }
            }
        }

        .history-con {
            grid-column: 4 / -1;

            h2 {
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .salary-title {
                font-size: 1.2rem;

                span {
                    font-size: 1.8rem;
                }
            }

            .salary-item {
                background: ${({ darkMode }) => (darkMode ? '#333' : '#FCF6F9')};
                color: ${({ darkMode }) => (darkMode ? '#FFF' : 'rgba(0, 0, 0, 0.8)')};
                border: 2px solid ${({ darkMode }) => (darkMode ? '#444' : '#FFFFFF')};
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                p {
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard;
