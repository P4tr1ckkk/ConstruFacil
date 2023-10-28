//calculadora de rodapé
const calculatorIcon = document.getElementById("calculatorIcon");
        const calculator = document.getElementById("calculator");
        const closeCalculator = document.getElementById("closeCalculator");

        calculatorIcon.addEventListener("click", () => {
            calculator.style.display = "block";
        });

        closeCalculator.addEventListener("click", () => {
            calculator.style.display = "none";
        });

        let display = document.getElementById("display");

        function appendToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = "";
        }

        function calculateResult() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Erro";
            }
        }

         // Manipuladores de eventos para teclado
         document.addEventListener("keydown", function(event) {
            if (event.key.match(/[0-9.+\-*/()=]|Backspace/)) {
                if (event.key === "Enter") {
                    event.key = "="; // Mapeia Enter para o botão de igual (=)
                }
                appendToDisplay(event.key);
            }
        });