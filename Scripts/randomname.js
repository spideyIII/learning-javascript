function whosPaying(names) {
    const selectedName = names[Math.floor(Math.random() * names.length)];
    return selectedName + ' is going to buy lunch today!';
}
whosPaying(["Scott", "Sonja", "Sera", "Scotty", "Gabe", "Karina"])