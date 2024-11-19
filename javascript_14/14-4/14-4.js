try {
    throw new SyntaxError();
} catch (e) {
    if (e instanceof SyntaxError) {
        console.log('例外 SyntaxError');
    } else if (e instanceof Error) {
        console.log('例外 Error');
    }
}
