enum LoadingStatus {
    Loading,
    Error,
    Success,
}

type DataState = {
    status: LoadingStatus
    error?: Error,
    data?: number
}

const handleData = (status: DataState) => {
    switch (status.status) {
        case 0:
            return 'loading...'
        case 1:
            return status.error.message
        case 2:
            return status.data

    }
}

const loading: DataState = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...

const error: DataState = { status: LoadingStatus.Error, error: new Error('some error') };
console.log(handleData(error)); // some error

const success: DataState = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // 42
