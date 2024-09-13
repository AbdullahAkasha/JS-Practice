(function chai () {
    // Named IFFE
    console.log(`DB Connected`)
})();
// Semi colon is must to run the next IFFE

(() => {
    // Without Name Iffe
    console.log(`DB COnnected 2`);
})()