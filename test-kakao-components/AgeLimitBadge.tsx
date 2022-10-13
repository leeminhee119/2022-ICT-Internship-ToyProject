import React from 'react';

interface AgeLimitBadgeInterface {
    age_grade: number,
}
export const AgeLimitBadge = (props:AgeLimitBadgeInterface) => {
    let imageSource = '';
    if (props.age_grade == 15) {
        imageSource = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDhDMTYgMTIuNDE4MyAxMi40MTgzIDE2IDggMTZDMy41ODE3MiAxNiAwIDEyLjQxODMgMCA4QzAgMy41ODE3MiAzLjU4MTcyIDAgOCAwQzEyLjQxODMgMCAxNiAzLjU4MTcyIDE2IDhaIiBmaWxsPSIjOTk5OTk5Ii8+CjxwYXRoIGQ9Ik03LjY3NSAxMC41NzQ5VjExLjQ5OTlIMy42NzVWMTAuNTc0OUg1LjE0VjYuMzU5OUM1LjE0IDYuMTkzMjQgNS4xNDUgNi4wMjE1NyA1LjE1NSA1Ljg0NDlMNC4xMTUgNi43MTQ5QzQuMDU1IDYuNzYxNTcgMy45OTUgNi43OTE1NyAzLjkzNSA2LjgwNDlDMy44NzgzMyA2LjgxNDkgMy44MjMzMyA2LjgxNDkgMy43NyA2LjgwNDlDMy43MiA2Ljc5NDkgMy42NzUgNi43NzgyNCAzLjYzNSA2Ljc1NDlDMy41OTUgNi43MjgyNCAzLjU2NSA2LjY5OTkgMy41NDUgNi42Njk5TDMuMTU1IDYuMTM0OUw1LjM2IDQuMjU5OUg2LjM3NVYxMC41NzQ5SDcuNjc1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTkuNjMwNzggNi44OTQ5QzkuNzkwNzggNi44NjE1NyA5Ljk0NDEyIDYuODM4MjQgMTAuMDkwOCA2LjgyNDlDMTAuMjM3NCA2LjgwODI0IDEwLjM3OTEgNi43OTk5IDEwLjUxNTggNi43OTk5QzEwLjg5NTggNi43OTk5IDExLjIzMDggNi44NTY1NyAxMS41MjA4IDYuOTY5OUMxMS44MTA4IDcuMDgzMjQgMTIuMDU0MSA3LjIzOTkgMTIuMjUwOCA3LjQzOTlDMTIuNDQ3NCA3LjYzOTkgMTIuNTk1OCA3Ljg3NDkgMTIuNjk1OCA4LjE0NDlDMTIuNzk1OCA4LjQxMTU3IDEyLjg0NTggOC42OTk5IDEyLjg0NTggOS4wMDk5QzEyLjg0NTggOS4zOTMyNCAxMi43Nzc0IDkuNzQzMjQgMTIuNjQwOCAxMC4wNTk5QzEyLjUwNzQgMTAuMzc2NiAxMi4zMjA4IDEwLjY0ODIgMTIuMDgwOCAxMC44NzQ5QzExLjg0MDggMTEuMDk4MiAxMS41NTU4IDExLjI3MTYgMTEuMjI1OCAxMS4zOTQ5QzEwLjg5OTEgMTEuNTE4MiAxMC41NDI0IDExLjU3OTkgMTAuMTU1OCAxMS41Nzk5QzkuOTI5MTIgMTEuNTc5OSA5LjcxNDEyIDExLjU1NjYgOS41MTA3OCAxMS41MDk5QzkuMzA3NDUgMTEuNDYzMiA5LjExNTc4IDExLjQwMTYgOC45MzU3OCAxMS4zMjQ5QzguNzU5MTIgMTEuMjQ0OSA4LjU5NDEyIDExLjE1NDkgOC40NDA3OCAxMS4wNTQ5QzguMjkwNzggMTAuOTUxNiA4LjE1NTc4IDEwLjg0MzIgOC4wMzU3OCAxMC43Mjk5TDguNDE1NzggMTAuMjA0OUM4LjQ5NTc4IDEwLjA5MTYgOC42MDA3OCAxMC4wMzQ5IDguNzMwNzggMTAuMDM0OUM4LjgxNDExIDEwLjAzNDkgOC44OTkxMSAxMC4wNjE2IDguOTg1NzggMTAuMTE0OUM5LjA3MjQ1IDEwLjE2ODIgOS4xNzA3OCAxMC4yMjY2IDkuMjgwNzggMTAuMjg5OUM5LjM5NDEyIDEwLjM1MzIgOS41MjU3OCAxMC40MTE2IDkuNjc1NzggMTAuNDY0OUM5LjgyOTExIDEwLjUxODIgMTAuMDEyNCAxMC41NDQ5IDEwLjIyNTggMTAuNTQ0OUMxMC40NTI0IDEwLjU0NDkgMTAuNjUyNCAxMC41MDgyIDEwLjgyNTggMTAuNDM0OUMxMC45OTkxIDEwLjM2MTYgMTEuMTQyNCAxMC4yNTk5IDExLjI1NTggMTAuMTI5OUMxMS4zNzI0IDkuOTk2NTcgMTEuNDU5MSA5LjgzOTkgMTEuNTE1OCA5LjY1OTlDMTEuNTc1OCA5LjQ3NjU3IDExLjYwNTggOS4yNzgyNCAxMS42MDU4IDkuMDY0OUMxMS42MDU4IDguNjcxNTcgMTEuNDkwOCA4LjM2NDkgMTEuMjYwOCA4LjE0NDlDMTEuMDM0MSA3LjkyMTU3IDEwLjY5NzQgNy44MDk5IDEwLjI1MDggNy44MDk5QzkuOTA3NDUgNy44MDk5IDkuNTU1NzggNy44NzMyNCA5LjE5NTc4IDcuOTk5OUw4LjQyNTc4IDcuNzc5OUw5LjAyNTc4IDQuMjY5OUgxMi41OTU4VjQuNzk0OUMxMi41OTU4IDQuOTcxNTcgMTIuNTQwOCA1LjExNDkgMTIuNDMwOCA1LjIyNDlDMTIuMzIwOCA1LjMzNDkgMTIuMTM0MSA1LjM4OTkgMTEuODcwOCA1LjM4OTlIOS44ODU3OEw5LjYzMDc4IDYuODk0OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
    }
    return (
        <>
        {
            imageSource == ''?null:
                <img src={imageSource} style={{
                    position: 'absolute',
                    right: '5px',
                    top: '5px'
                }}/>
        }
        </>
    )
}