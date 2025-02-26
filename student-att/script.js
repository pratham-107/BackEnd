document.getElementById('detailsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const phone = document.getElementById('phone').value;
    const batch = document.getElementById('batch').value;

    // Generate a unique ID (for simplicity, using a timestamp)
    const uniqueID = Date.now().toString();

    // Store student details in localStorage
    const studentDetails = {
        id: uniqueID,
        name: name,
        course: course,
        phone: phone,
        batch: batch
    };
    localStorage.setItem(uniqueID, JSON.stringify(studentDetails));

    // Generate QR Code
    const qrCodeContainer = document.getElementById('qrCode');
    qrCodeContainer.innerHTML = '';
    new QRCode(qrCodeContainer, {
        text: uniqueID,
        width: 200,
        height: 200
    });

    // Show QR Code container
    document.getElementById('qrCodeContainer').style.display = 'block';
});

// Function to mark attendance
function markAttendance(uniqueID) {
    const studentDetails = JSON.parse(localStorage.getItem(uniqueID));
    if (studentDetails) {
        const now = new Date();
        const attendanceRecord = {
            id: uniqueID,
            name: studentDetails.name,
            course: studentDetails.course,
            batch: studentDetails.batch,
            time: now.toLocaleTimeString(),
            date: now.toLocaleDateString(),
            day: now.toLocaleString('en-US', { weekday: 'long' })
        };

        // Save attendance record
        let attendanceLog = JSON.parse(localStorage.getItem('attendanceLog')) || [];
        attendanceLog.push(attendanceRecord);
        localStorage.setItem('attendanceLog', JSON.stringify(attendanceLog));

        // Display attendance log
        displayAttendanceLog();
    }
}

// Function to display attendance log
function displayAttendanceLog() {
    const logList = document.getElementById('logList');
    logList.innerHTML = '';
    const attendanceLog = JSON.parse(localStorage.getItem('attendanceLog')) || [];
    attendanceLog.forEach(record => {
        const li = document.createElement('li');
        li.textContent = `${record.name} (${record.course}, Batch ${record.batch}) - ${record.time} on ${record.date}, ${record.day}`;
        logList.appendChild(li);
    });
}

// Simulate QR Code Scanning (for demonstration purposes)
function simulateQRScan(uniqueID) {
    markAttendance(uniqueID);
}

// Display attendance log on page load
displayAttendanceLog();