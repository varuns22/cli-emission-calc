# Command Line CO2 emission Calculator

A CO2 emission calculator to accept Transportation Mode, Distance, Unit of Distance, and the Output Unit

The application accepts the below mentioned values for different parameters

### **Transpotation Mode**

| Accepted Values          |
| ------------------------ |
| small-diesel-car         |
| small-petrol-car         |
| small-plugin-hybrid-car  |
| small-electric-car       |
| medium-diesel-car        |
| medium-petrol-car        |
| medium-plugin-hybrid-car |
| medium-electric-car      |
| large-diesel-car         |
| large-petrol-car         |
| large-plugin-hybrid-car  |
| large-electric-car       |
| bus                      |
| train                    |

<br>

### **Unit of Distance**

| Accepted Values |
| --------------- |
| m               |
| km              |

**_Note:_** _Default value is km_
<br>

### **Output Unit**

| Accepted Values |
| --------------- |
| g               |
| kg              |

---

<br>

## **Code Execution**

### **Install**

```shell
npm install
```

#### **Test**

```shell
npm test
```

#### **Run Application**

```shell
node index.js -d 15 -t medium-petrol-car -u km -o kg
```

#### **Help**

```shell
 node index.js -h
```
