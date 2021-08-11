import React from 'react'
import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2'
import '../../styles/charts.css'

const App = () =>{
    const value = 75
    return(
        <div>
            <h1 className="Titulo">Dashboard de RH</h1>
            <div className="bodyChart">
                <div className="chart1">
                    <div className="chart2">
                        <Bar
                            data={{
                                labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
                                datasets: [{
                                    label: '# de empleados',
                                    data: [12, 19, 19, 21, 22, 25],
                                    backgroundColor: [
                                        'rgba(153, 102, 255, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(153, 102, 255, 1)'
                                    ],
                                    borderWidth: 1,
                                }],
                            }}
                            height={400}
                            width={100} 
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes:[{
                                        ticks:{
                                            beginAtZero: true,
                                        }
                                    }],
                                },
                                plugins: {
                                    legend: {
                                    position: 'top',
                                    },
                                    title: {
                                    display: true,
                                    text: 'Empleados de la empresa por anno'
                                    }
                                },
                            }}
                        />
                    </div>
                </div>
                <div className="chart2">
                    <Pie
                        data={{
                            labels: ['Hombre', 'Mujer'],
                            datasets: [{
                                label: '# of Votes',
                                data: [12, 19],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)'
                                ],
                                borderWidth: 1,
                            }],
                        }}
                        height={300}
                        width={100} 
                        options={{
                            responsive: true,
                            indexAxis: 'y',
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                position: 'top',
                                },
                                title: {
                                display: true,
                                text: 'Genero'
                                }
                            },
                        }}
                    />
                </div>
                <div className="chart2">
                    <Doughnut 
                        data={{
                            labels: ['Puntualidad'],
                            datasets: [{
                                data: [value, 100-value],
                                backgroundColor: [
                                    "#FF6384",
                                    "#AAAAAA"
                                ],
                                hoverBackgroundColor: [
                                "#FF6384",
                                "#AAAAAA"
                                ],
                                hoverBorderColor: [
                                "#FF6384",
                                "#ffffff"
                                ],
                            }],
                        }}
                        height={300}
                        width={100} 
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            cutoutPercentage: 84,
                            plugins: {
                                legend: {
                                position: 'top',
                                },
                                title: {
                                display: true,
                                text: 'Puntualidad'
                                }
                            },
                            tooltips: {
                                enabled: false // Hide tooltips
                            },
                        }}
                    />
                </div>
                <div className="chart1">
                    <div className="chart2">
                        <Line
                            data={{
                                labels: ['Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre'],
                                datasets: [{
                                    label: '# de ventas reales',
                                    data: [11, 14, 17, 13, 15, 16],
                                    backgroundColor: [
                                        'rgba(153, 102, 255, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(153, 102, 255, 1)'
                                    ]
                                },
                                {
                                    label: '# de plan de ventas',
                                    data: [12, 19, 19, 21, 22, 25],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)'
                                    ]
                                }
                            ],
                            }}
                            height={400}
                            width={100} 
                            options={{
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                    position: 'top',
                                    },
                                    title: {
                                    display: true,
                                    text: 'Ventas planificadas vs Ventas reales'
                                    }
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="bodyChart">  
                <div className="chart1">
                    <div className="chart2">
                        <Bar
                            data={{
                                labels: ['Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre'],
                                datasets: [{
                                    label: '# de bajas de covid',
                                    data: [4, 5, 1, 0, 2, 5],
                                    backgroundColor: [
                                        'rgba(153, 102, 255, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(153, 102, 255, 1)'
                                    ],
                                    borderWidth: 1,
                                },
                                {
                                    label: '# de muertes por covid',
                                    data: [1, 2, 1, 0, 0, 2],
                                    backgroundColor: [
                                        'orange'
                                    ],
                                    borderColor: [
                                        'red'
                                    ],
                                    borderWidth: 1,
                                }],
                            }}
                            height={400}
                            width={100} 
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes:[{
                                        ticks:{
                                            beginAtZero: true,
                                        }
                                    }],
                                },
                                plugins: {
                                    legend: {
                                    position: 'top',
                                    },
                                    title: {
                                    display: true,
                                    text: 'Afectados por covid mensuales'
                                    }
                                },
                            }}
                        />
                    </div>
                </div>
                <div className="chart1">
                    <div className="chart2">
                        <Bar
                            data={{
                                labels: ['Abajo de 18', '18-29', '30-39', '40-49', '50-59', '60+'],
                                datasets: [{
                                    label: '# de empleados',
                                    data: [22, 11, 6, 2, 4, 0],
                                    backgroundColor: [
                                        'rgba(75, 192, 192, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(75, 192, 192, 1)'
                                    ],
                                    borderWidth: 1,
                                }],
                            }}
                            height={400}
                            width={100} 
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes:[{
                                        ticks:{
                                            beginAtZero: true,
                                        }
                                    }],
                                },
                                plugins: {
                                    legend: {
                                    position: 'top',
                                    },
                                    title: {
                                    display: true,
                                    text: 'Rango de edad de los empleados'
                                    }
                                },
                            }}
                        />
                    </div>
                </div>
                <div className="chart1">
                    <div className="chart2">
                        <Bar
                            data={{
                                labels: ['Gerencia', 'Administracion', 'RRHH', 'Operadores', 'Centro de servicio'],
                                datasets: [{
                                    label: '# de empleados',
                                    data: [12, 12, 9, 21, 15],
                                    backgroundColor: [
                                        'rgba(54, 162, 235, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(54, 162, 235, 1)'
                                    ],
                                    borderWidth: 1,
                                }],
                            }}
                            height={400}
                            width={100} 
                            options={{
                                indexAxis: 'y',
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes:[{
                                        ticks:{
                                            beginAtZero: true,
                                        }
                                    }],
                                },
                                plugins: {
                                    legend: {
                                    position: 'top',
                                    },
                                    title: {
                                    display: true,
                                    text: 'Empleados por sector'
                                    }
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App