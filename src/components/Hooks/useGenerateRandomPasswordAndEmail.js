export function generateRandomPassword(length = 12) {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    const allChars = upperCaseChars + lowerCaseChars + numberChars + specialChars;
    let password = "";

    // Ensure the password contains at least one of each character type
    password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Generate the rest of the password
    for (let i = 4; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password to ensure randomness
    return password.split('').sort(() => 0.5 - Math.random()).join('');
}

export function generateRandomEmail() {
    const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let emailUsername = "";

    const usernameLength = Math.floor(Math.random() * 10) + 5; // Username length between 5 and 14

    for (let i = 0; i < usernameLength; i++) {
        emailUsername += chars[Math.floor(Math.random() * chars.length)];
    }

    const domain = domains[Math.floor(Math.random() * domains.length)];

    return `${emailUsername}@${domain}`;
}
