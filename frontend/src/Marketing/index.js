import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'

export default function Marketing() {
    // You can delete testingAPI component and start your assignment.    
    return <TestingAPI />
}


/**
 * The below components shows the working example of axios for API calls.
 * Also Material UI is integrated for design.
 */
function TestingAPI() {

    const [testData, setTestData] = React.useState(undefined);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: "24px", alignItems: "start" }}>
            <p>You can make all the changes here -{'>'} <u><em>src/Marketing/index.js</em></u> </p>

            <p>Sample code to test API</p>

            {
                testData &&
                <>
                    {
                        Object.keys(testData).map(field => {
                            return (
                                <div key={field}>
                                    <span>{`${field[0].toUpperCase()}${field.substring(1)}`}</span> - <span>{testData[field]}</span>
                                </div>
                            )
                        })
                    }
                    <div style={{ height: "24px" }} />
                </>
            }

            <Button
                variant="contained"
                onClick={async () => {
                    const response = await axios.get(`http://localhost:8000/test`);
                    setTestData(response.data);
                }}>
                Test API call
            </Button>

        </div>

    )
}