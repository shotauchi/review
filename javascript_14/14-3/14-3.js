try {
    throw new Error();
} catch (e) {
    if (e instanceof Error) {
        console.log('例外 Error');
    }
}
