const questions = [
  // =========================================================
  // 1. INTRODUCTION TO JAVA — 1–20
  // =========================================================

  {
    id: 1,
    question: "Who originally developed Java?",
    options: ["Bill Gates", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
    answer: "B",
  },
  {
    id: 2,
    question: "Java was originally developed at:",
    options: ["Microsoft", "IBM", "Sun Microsystems", "Apple"],
    answer: "C",
  },
  {
    id: 3,
    question: "Which of the following is a major feature of Java?",
    options: ["Platform dependence", "Manual memory management", "Platform independence", "Hardware dependence"],
    answer: "C",
  },
  {
    id: 4,
    question: "Java source code is compiled into:",
    options: ["Machine code", "Bytecode", "Assembly code", "Binary code only"],
    answer: "B",
  },
  {
    id: 5,
    question: "Which component executes Java bytecode?",
    options: ["JDK", "JVM", "JAR", "Javadoc"],
    answer: "B",
  },
  {
    id: 6,
    question: "What does JDK stand for?",
    options: ["Java Development Kit", "Java Design Kit", "Java Deployment Kit", "Java Debug Kit"],
    answer: "A",
  },
  {
    id: 7,
    question: "What does JRE stand for?",
    options: ["Java Runtime Environment", "Java Resource Environment", "Java Runtime Engine", "Java Resource Engine"],
    answer: "A",
  },
  {
    id: 8,
    question: "Which component contains tools required to develop Java programs?",
    options: ["JRE", "JVM", "JDK", "JAR"],
    answer: "C",
  },
  {
    id: 9,
    question: "Which command is used to compile Java source code?",
    options: ["java", "javac", "compile", "jrun"],
    answer: "B",
  },
  {
    id: 10,
    question: "Which command is used to run compiled Java bytecode?",
    options: ["javac", "java", "runjava", "execute"],
    answer: "B",
  },
  {
    id: 11,
    question: "What is the file extension of Java source code?",
    options: [".class", ".java", ".jar", ".jav"],
    answer: "B",
  },
  {
    id: 12,
    question: "What is the file extension of compiled Java bytecode?",
    options: [".java", ".jar", ".class", ".byte"],
    answer: "C",
  },
  {
    id: 13,
    question: "What is the traditional entry point of a Java application?",
    options: ["start()", "run()", "main()", "init()"],
    answer: "C",
  },
  {
    id: 14,
    question: "Which keyword is used to define a class in Java?",
    options: ["define", "class", "Class", "object"],
    answer: "B",
  },
  {
    id: 15,
    question: "Java is primarily a:",
    options: ["Procedural language", "Object-oriented language", "Assembly language", "Markup language"],
    answer: "B",
  },
  {
    id: 16,
    question: "Which of the following is NOT a characteristic of Java?",
    options: ["Object-oriented programming", "Platform independence", "Automatic memory management", "Pointer arithmetic"],
    answer: "D",
  },
  {
    id: 17,
    question: "Java platform independence is mainly achieved through:",
    options: ["JVM and bytecode", "Pointers", "Operating systems", "Assembly language"],
    answer: "A",
  },
  {
    id: 18,
    question: "Which Java component provides the runtime environment?",
    options: ["JDK", "JRE", "JVM", "JAR"],
    answer: "B",
  },
  {
    id: 19,
    question: "Java bytecode can run on:",
    options: ["Only Windows", "Only Linux", "Any platform with a compatible JVM", "Only macOS"],
    answer: "C",
  },
  {
    id: 20,
    question: "Which phrase is commonly associated with Java?",
    options: ["Code Once, Run Never", "Write Once, Run Anywhere", "Compile Once, Run Once", "Write Anywhere, Run Once"],
    answer: "B",
  },

  // =========================================================
  // 2. CLASSES AND OBJECTS — 21–45
  // =========================================================

  {
    id: 21,
    question: "A class in Java is best described as a:",
    options: ["Variable", "Blueprint for objects", "Method", "Package"],
    answer: "B",
  },
  {
    id: 22,
    question: "An object in Java is:",
    options: ["An instance of a class", "A package", "A method", "A keyword"],
    answer: "A",
  },
  {
    id: 23,
    question: "Which keyword is used to create an object?",
    options: ["class", "object", "new", "create"],
    answer: "C",
  },
  {
    id: 24,
    question: "A method having the same name as its class is called a:",
    options: ["Static method", "Constructor", "Destructor", "Main method"],
    answer: "B",
  },
  {
    id: 25,
    question: "A constructor is automatically called when:",
    options: ["A method is compiled", "An object is created", "A class is imported", "A package is created"],
    answer: "B",
  },
  {
    id: 26,
    question: "Constructors in Java have:",
    options: ["A String return type", "No return type", "An int return type", "A void return type"],
    answer: "B",
  },
  {
    id: 27,
    question: "Which keyword refers to the current object?",
    options: ["current", "self", "this", "object"],
    answer: "C",
  },
  {
    id: 28,
    question: "Which keyword refers to the superclass?",
    options: ["parent", "base", "super", "extends"],
    answer: "C",
  },
  {
    id: 29,
    question: "A constructor that takes no arguments is called a:",
    options: ["Parameterized constructor", "Default/no-argument constructor", "Static constructor", "Private constructor"],
    answer: "B",
  },
  {
    id: 30,
    question: "Can a Java class have multiple constructors?",
    options: ["Yes", "No", "Only two", "Only if they are static"],
    answer: "A",
  },
  {
    id: 31,
    question: "Constructor overloading means:",
    options: ["Using one constructor twice", "Having constructors with different parameter lists", "Having constructors with the same parameters", "Using constructors without classes"],
    answer: "B",
  },
  {
    id: 32,
    question: "Which operator is commonly used to access an object's members?",
    options: [":", ".", "::", "->"],
    answer: "B",
  },
  {
    id: 33,
    question: "Instance variables belong to:",
    options: ["The package", "Individual objects", "The JVM", "The compiler"],
    answer: "B",
  },
  {
    id: 34,
    question: "A static variable belongs to the:",
    options: ["Object only", "Class", "Method", "Constructor"],
    answer: "B",
  },
  {
    id: 35,
    question: "Which keyword is used to declare a static member?",
    options: ["static", "shared", "class", "common"],
    answer: "B",
  },
  {
    id: 36,
    question: "Which access modifier provides the widest accessibility?",
    options: ["private", "protected", "public", "default"],
    answer: "C",
  },
  {
    id: 37,
    question: "Which access modifier restricts direct access to the declaring class?",
    options: ["public", "protected", "private", "default"],
    answer: "C",
  },
  {
    id: 38,
    question: "Encapsulation involves:",
    options: ["Combining data and methods into a class", "Deleting methods", "Using only public variables", "Avoiding classes"],
    answer: "A",
  },
  {
    id: 39,
    question: "Which commonly supports encapsulation?",
    options: ["Pointers", "Getters and setters", "Packages only", "Loops"],
    answer: "B",
  },
  {
    id: 40,
    question: "Which method commonly provides a textual representation of an object?",
    options: ["display()", "print()", "toString()", "show()"],
    answer: "C",
  },
  {
    id: 41,
    question: "When used between object references, == checks:",
    options: ["Object contents", "Reference identity", "Hash values", "Class names"],
    answer: "B",
  },
  {
    id: 42,
    question: "Which method is commonly used to compare object contents?",
    options: ["compare()", "equals()", "same()", "match()"],
    answer: "B",
  },
  {
    id: 43,
    question: "Which method is related to the equals() contract?",
    options: ["hashCode()", "toString()", "compareTo()", "clone()"],
    answer: "A",
  },
  {
    id: 44,
    question: "A Java class can contain:",
    options: ["Only variables", "Only methods", "Variables, methods, constructors and other members", "Only constructors"],
    answer: "C",
  },
  {
    id: 45,
    question: "Which keyword prevents a class from being inherited?",
    options: ["static", "private", "final", "sealed"],
    answer: "C",
  },

  // =========================================================
  // 3. OBJECT-ORIENTED PROGRAMMING — 46–70
  // =========================================================

  {
    id: 46,
    question: "Which of the following is NOT a traditional pillar of OOP?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
    answer: "D",
  },
  {
    id: 47,
    question: "Inheritance allows a class to:",
    options: ["Acquire properties and behavior from another class", "Delete another class", "Avoid objects", "Become a package"],
    answer: "A",
  },
  {
    id: 48,
    question: "The class from which another class inherits is called the:",
    options: ["Subclass", "Superclass", "Interface", "Object"],
    answer: "B",
  },
  {
    id: 49,
    question: "The class that inherits from another class is called the:",
    options: ["Superclass", "Parent", "Subclass", "Interface"],
    answer: "C",
  },
  {
    id: 50,
    question: "Which keyword is used for class inheritance?",
    options: ["inherits", "extends", "implements", "super"],
    answer: "B",
  },
  {
    id: 51,
    question: "Java supports multiple inheritance of classes through:",
    options: ["Constructors", "Interfaces", "Packages", "Abstract classes"],
    answer: "B",
  },
  {
    id: 52,
    question: "Polymorphism means:",
    options: ["One interface or method can represent different forms", "One class can have only one object", "A class cannot inherit", "Data cannot change"],
    answer: "A",
  },
  {
    id: 53,
    question: "Method overloading is an example of:",
    options: ["Runtime polymorphism", "Compile-time polymorphism", "Inheritance", "Encapsulation"],
    answer: "B",
  },
  {
    id: 54,
    question: "Method overriding is an example of:",
    options: ["Compile-time polymorphism", "Runtime polymorphism", "Encapsulation", "Abstraction"],
    answer: "B",
  },
  {
    id: 55,
    question: "Method overloading requires:",
    options: ["Different return types only", "Different parameter lists", "Different class names", "Different packages"],
    answer: "B",
  },
  {
    id: 56,
    question: "Can methods be overloaded by return type alone?",
    options: ["Yes", "No", "Only with static methods", "Only with constructors"],
    answer: "B",
  },
  {
    id: 57,
    question: "Method overriding occurs when:",
    options: ["A class creates a new constructor", "A subclass provides a new implementation of an inherited method", "A method is overloaded", "A class is declared final"],
    answer: "B",
  },
  {
    id: 58,
    question: "Which annotation is commonly used when overriding a method?",
    options: ["@Override", "@Overload", "@Inherited", "@Method"],
    answer: "B",
  },
  {
    id: 59,
    question: "Abstraction is used to:",
    options: ["Hide implementation details", "Expose all implementation details", "Prevent inheritance", "Delete objects"],
    answer: "A",
  },
  {
    id: 60,
    question: "Which keyword is used to declare an abstract class?",
    options: ["interface", "abstract", "virtual", "base"],
    answer: "B",
  },
  {
    id: 61,
    question: "Can an abstract class be instantiated directly?",
    options: ["Yes", "No", "Only if static", "Only inside main()"],
    answer: "B",
  },
  {
    id: 62,
    question: "An abstract method normally has:",
    options: ["A complete implementation", "No implementation/body", "A private body", "A static body"],
    answer: "B",
  },
  {
    id: 63,
    question: "Which OOP concept hides internal implementation details?",
    options: ["Abstraction", "Inheritance", "Polymorphism", "Overloading"],
    answer: "A",
  },
  {
    id: 64,
    question: "Which concept protects data from unauthorized direct access?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Overriding"],
    answer: "A",
  },
  {
    id: 65,
    question: "The relationship represented by 'Is-a' is:",
    options: ["Composition", "Inheritance", "Aggregation", "Association"],
    answer: "B",
  },
  {
    id: 66,
    question: "The relationship represented by 'Has-a' is commonly:",
    options: ["Composition or aggregation", "Inheritance", "Overloading", "Polymorphism"],
    answer: "A",
  },
  {
    id: 67,
    question: "Composition means:",
    options: ["A class inherits another class", "One object strongly owns another component", "A method is overloaded", "A package contains a class"],
    answer: "B",
  },
  {
    id: 68,
    question: "Which concept commonly provides parent-child code reuse?",
    options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
    answer: "A",
  },
  {
    id: 69,
    question: "When the same method call behaves differently depending on the object, this demonstrates:",
    options: ["Encapsulation", "Polymorphism", "Composition", "Compilation"],
    answer: "B",
  },
  {
    id: 70,
    question: "Good object-oriented design generally aims for:",
    options: ["Low cohesion and high coupling", "High coupling and low cohesion", "High cohesion and low coupling", "No classes"],
    answer: "C",
  },

  // =========================================================
  // 4. INHERITANCE AND INTERFACES — 71–95
  // =========================================================

  {
    id: 71,
    question: "Which keyword is used when a class inherits another class?",
    options: ["implements", "extends", "inherits", "super"],
    answer: "B",
  },
  {
    id: 72,
    question: "Which keyword is used when a class implements an interface?",
    options: ["extends", "interface", "implements", "inherits"],
    answer: "C",
  },
  {
    id: 73,
    question: "An interface primarily defines a:",
    options: ["Contract", "Constructor", "Package", "Variable"],
    answer: "A",
  },
  {
    id: 74,
    question: "A Java class can implement:",
    options: ["Only one interface", "Multiple interfaces", "No interfaces", "Only two interfaces"],
    answer: "B",
  },
  {
    id: 75,
    question: "A Java class can directly extend:",
    options: ["One class", "Multiple classes", "No class", "Unlimited classes"],
    answer: "B",
  },
  {
    id: 76,
    question: "Traditional interface methods without implementations are:",
    options: ["Abstract", "Private", "Final", "Static"],
    answer: "A",
  },
  {
    id: 77,
    question: "Which keyword is used to declare an interface?",
    options: ["interface", "implements", "abstract", "contract"],
    answer: "A",
  },
  {
    id: 78,
    question: "An interface can:",
    options: ["Extend another interface", "Extend a class", "Instantiate an object", "Have constructors"],
    answer: "A",
  },
  {
    id: 79,
    question: "An interface can extend:",
    options: ["Multiple interfaces", "Only one interface", "One class", "No interfaces"],
    answer: "A",
  },
  {
    id: 80,
    question: "Modern Java interfaces can contain:",
    options: ["Only abstract methods", "Only variables", "Only constructors", "Default, static and private methods"],
    answer: "D",
  },
  {
    id: 81,
    question: "Which keyword is used for an interface default method?",
    options: ["default", "virtual", "standard", "method"],
    answer: "A",
  },
  {
    id: 82,
    question: "Which keyword is used to invoke a superclass constructor?",
    options: ["this", "super", "parent", "base"],
    answer: "B",
  },
  {
    id: 83,
    question: "Which keyword is used to invoke another constructor in the same class?",
    options: ["super", "this", "self", "constructor"],
    answer: "B",
  },
  {
    id: 84,
    question: "A call to super() in a constructor is generally:",
    options: ["The last statement", "The first statement", "Optional after return", "A class declaration"],
    answer: "B",
  },
  {
    id: 85,
    question: "If no explicit superclass constructor is called, Java attempts to call the superclass:",
    options: ["Parameterized constructor", "No-argument constructor", "Private constructor", "Static constructor"],
    answer: "B",
  },
  {
    id: 86,
    question: "If a superclass has no accessible no-argument constructor, the subclass must:",
    options: ["Explicitly call an appropriate superclass constructor", "Delete the superclass", "Use this() only", "Become final"],
    answer: "A",
  },
  {
    id: 87,
    question: "Private members are:",
    options: ["Directly inherited", "Not directly accessible to subclasses", "Always public", "Always protected"],
    answer: "B",
  },
  {
    id: 88,
    question: "A protected member is accessible in:",
    options: ["Only the declaring class", "Subclasses and relevant package contexts", "Only unrelated classes", "Only interfaces"],
    answer: "B",
  },
  {
    id: 89,
    question: "Upcasting means:",
    options: ["Superclass reference to subclass object", "Subclass object/reference to superclass reference", "Converting int to double", "Converting String to int"],
    answer: "B",
  },
  {
    id: 90,
    question: "Downcasting means:",
    options: ["Superclass reference to subclass reference", "Subclass reference to superclass reference", "Converting double to int", "Converting object to String"],
    answer: "A",
  },
  {
    id: 91,
    question: "Which operator checks an object's type?",
    options: ["typeof", "instanceof", "type", "check"],
    answer: "B",
  },
  {
    id: 92,
    question: "An incorrect downcast may cause:",
    options: ["ClassCastException", "IOException", "ArithmeticException", "NullPointerException"],
    answer: "A",
  },
  {
    id: 93,
    question: "A final method:",
    options: ["Must be static", "Cannot be overridden", "Cannot be called", "Must be private"],
    answer: "B",
  },
  {
    id: 94,
    question: "A final class:",
    options: ["Must be abstract", "Cannot be inherited", "Cannot contain methods", "Cannot contain objects"],
    answer: "B",
  },
  {
    id: 95,
    question: "Multiple type inheritance in Java is commonly achieved using:",
    options: ["Classes", "Interfaces", "Constructors", "Packages"],
    answer: "B",
  },

  // =========================================================
  // 5. EXCEPTION HANDLING — 96–120
  // =========================================================

  {
    id: 96,
    question: "An exception is something that:",
    options: ["Disrupts normal program execution", "Always improves execution", "Creates a class", "Compiles source code"],
    answer: "A",
  },
  {
    id: 97,
    question: "Which keyword is used to handle an exception?",
    options: ["catch", "handle", "exception", "except"],
    answer: "A",
  },
  {
    id: 98,
    question: "Which block contains code that may generate an exception?",
    options: ["catch", "finally", "try", "throw"],
    answer: "C",
  },
  {
    id: 99,
    question: "Which block generally executes whether or not an exception occurs?",
    options: ["try", "finally", "catch", "throw"],
    answer: "B",
  },
  {
    id: 100,
    question: "Which keyword is used to manually throw an exception?",
    options: ["throws", "throw", "catch", "exception"],
    answer: "B",
  },
  {
    id: 101,
    question: "Which keyword declares exceptions that may be passed to the caller?",
    options: ["throw", "throws", "catch", "finally"],
    answer: "B",
  },
  {
    id: 102,
    question: "What is the root of the Java exception and error hierarchy?",
    options: ["Exception", "Error", "Throwable", "Object"],
    answer: "C",
  },
  {
    id: 103,
    question: "Checked exceptions are checked at:",
    options: ["Runtime", "Compile time", "Shutdown", "Object creation"],
    answer: "B",
  },
  {
    id: 104,
    question: "Which is a checked exception?",
    options: ["IOException", "NullPointerException", "ArithmeticException", "ClassCastException"],
    answer: "A",
  },
  {
    id: 105,
    question: "Which is an unchecked exception?",
    options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"],
    answer: "C",
  },
  {
    id: 106,
    question: "Integer division by zero normally causes:",
    options: ["ArithmeticException", "IOException", "NumberFormatException", "ClassCastException"],
    answer: "A",
  },
  {
    id: 107,
    question: "Accessing an array outside its valid range causes:",
    options: ["ArrayIndexOutOfBoundsException", "IOException", "ArithmeticException", "ClassNotFoundException"],
    answer: "A",
  },
  {
    id: 108,
    question: "Calling a method on a null reference may cause:",
    options: ["NullPointerException", "IOException", "ArithmeticException", "Error"],
    answer: "A",
  },
  {
    id: 109,
    question: "Converting an invalid String to an integer may cause:",
    options: ["NumberFormatException", "IOException", "ArithmeticException", "ClassCastException"],
    answer: "A",
  },
  {
    id: 110,
    question: "Can one try block have multiple catch blocks?",
    options: ["Yes", "No", "Only two", "Only with finally"],
    answer: "A",
  },
  {
    id: 111,
    question: "When multiple catch blocks are used, they should generally be ordered from:",
    options: ["General to specific", "Specific to general", "Random to specific", "Super to object"],
    answer: "B",
  },
  {
    id: 112,
    question: "What happens if catch(Exception) appears before catch(IOException)?",
    options: ["Both execute", "The IOException catch becomes unreachable", "IOException is ignored", "The program runs normally"],
    answer: "B",
  },
  {
    id: 113,
    question: "Can finally be used without catch?",
    options: ["Yes, with try", "No", "Only with throw", "Only with throws"],
    answer: "A",
  },
  {
    id: 114,
    question: "Which block is commonly used for resource cleanup?",
    options: ["try", "catch", "finally", "throw"],
    answer: "C",
  },
  {
    id: 115,
    question: "Try-with-resources automatically:",
    options: ["Closes resources", "Deletes files", "Creates threads", "Catches every exception"],
    answer: "A",
  },
  {
    id: 116,
    question: "A custom checked exception commonly extends:",
    options: ["Exception or an appropriate subclass", "Object only", "String", "Thread"],
    answer: "A",
  },
  {
    id: 117,
    question: "A missing class at runtime may cause:",
    options: ["ClassNotFoundException", "IOException", "ArithmeticException", "ArrayException"],
    answer: "A",
  },
  {
    id: 118,
    question: "Which of the following is an Error rather than an ordinary exception?",
    options: ["IOException", "StackOverflowError", "NumberFormatException", "SQLException"],
    answer: "B",
  },
  {
    id: 119,
    question: "The main purpose of exception handling is to:",
    options: ["Stop all programs", "Manage abnormal conditions gracefully", "Avoid methods", "Prevent compilation"],
    answer: "B",
  },
  {
    id: 120,
    question: "Exception propagation means an exception:",
    options: ["Moves up the call stack if not handled", "Is automatically deleted", "Becomes a class", "Is converted to bytecode"],
    answer: "A",
  },

  // =========================================================
  // 6. ARRAYS AND COLLECTIONS — 121–145
  // =========================================================

  {
    id: 121,
    question: "A Java array is a:",
    options: ["Fixed-size structure", "Dynamic structure only", "Database", "Package"],
    answer: "A",
  },
  {
    id: 122,
    question: "Java array indexing begins at:",
    options: ["0", "1", "-1", "2"],
    answer: "A",
  },
  {
    id: 123,
    question: "Which property gives the number of elements in an array?",
    options: ["size", "count", "length", "capacity"],
    answer: "C",
  },
  {
    id: 124,
    question: "Which collection allows duplicates and maintains insertion order?",
    options: ["Set", "List", "Map", "Queue"],
    answer: "B",
  },
  {
    id: 125,
    question: "Which collection interface represents an ordered collection?",
    options: ["List", "Set", "Map", "Queue"],
    answer: "A",
  },
  {
    id: 126,
    question: "Which collection does not allow duplicate elements?",
    options: ["List", "Set", "ArrayList", "Queue"],
    answer: "B",
  },
  {
    id: 127,
    question: "Which collection stores key-value pairs?",
    options: ["List", "Set", "Map", "Queue"],
    answer: "C",
  },
  {
    id: 128,
    question: "Which is a common implementation of List?",
    options: ["ArrayList", "HashMap", "HashSet", "TreeMap"],
    answer: "A",
  },
  {
    id: 129,
    question: "Which is a common implementation of Set?",
    options: ["ArrayList", "HashSet", "HashMap", "LinkedList"],
    answer: "B",
  },
  {
    id: 130,
    question: "Which is a common implementation of Map?",
    options: ["HashMap", "HashSet", "ArrayList", "LinkedList"],
    answer: "A",
  },
  {
    id: 131,
    question: "ArrayList is primarily backed by a:",
    options: ["Dynamic array", "Linked list", "Tree", "Hash table"],
    answer: "A",
  },
  {
    id: 132,
    question: "LinkedList is based on:",
    options: ["Linked nodes", "Hash tables", "Arrays only", "Stacks only"],
    answer: "A",
  },
  {
    id: 133,
    question: "Which is suitable for frequent insertion/removal at both ends?",
    options: ["HashMap", "LinkedList/Deque implementations", "TreeMap", "HashSet"],
    answer: "B",
  },
  {
    id: 134,
    question: "Which Set implementation sorts elements automatically?",
    options: ["HashSet", "TreeSet", "LinkedHashSet", "ArraySet"],
    answer: "B",
  },
  {
    id: 135,
    question: "Which Map implementation sorts keys?",
    options: ["HashMap", "TreeMap", "LinkedHashMap", "ArrayMap"],
    answer: "B",
  },
  {
    id: 136,
    question: "HashMap allows:",
    options: ["No null keys", "One null key", "Unlimited null keys", "Only null values"],
    answer: "B",
  },
  {
    id: 137,
    question: "Which interface is commonly used to iterate through a collection?",
    options: ["Iterator", "IterableOnly", "Scanner", "EnumeratorOnly"],
    answer: "A",
  },
  {
    id: 138,
    question: "Which method checks whether a collection contains an element?",
    options: ["has()", "contains()", "exists()", "find()"],
    answer: "B",
  },
  {
    id: 139,
    question: "Which method returns the number of elements in a collection?",
    options: ["length()", "count()", "size()", "capacity()"],
    answer: "C",
  },
  {
    id: 140,
    question: "Which interface is commonly associated with FIFO behavior?",
    options: ["Queue", "Stack", "Set", "Map"],
    answer: "A",
  },
  {
    id: 141,
    question: "FIFO stands for:",
    options: ["First In First Out", "First Input First Output", "Fast In Fast Out", "First In Final Out"],
    answer: "A",
  },
  {
    id: 142,
    question: "LIFO stands for:",
    options: ["Last In First Out", "Last Input First Output", "Low In First Out", "List In First Out"],
    answer: "A",
  },
  {
    id: 143,
    question: "Which modern interface can be used for LIFO-style operations?",
    options: ["Deque", "Map", "Set", "ListOnly"],
    answer: "A",
  },
  {
    id: 144,
    question: "Which class provides utility methods for collections?",
    options: ["Collections", "CollectionUtils", "CollectionTools", "Arrays"],
    answer: "A",
  },
  {
    id: 145,
    question: "Which class provides static utility methods for arrays?",
    options: ["Arrays", "ArrayUtils", "Collection", "System"],
    answer: "A",
  },

  // =========================================================
  // 7. GENERICS — 146–165
  // =========================================================

  {
    id: 146,
    question: "Generics primarily provide:",
    options: ["Compile-time type safety", "Runtime compilation", "Automatic inheritance", "Faster networking"],
    answer: "A",
  },
  {
    id: 147,
    question: "Which is a common convention for a generic type parameter?",
    options: ["<T>", "<G>", "<Generic>", "<Type>"],
    answer: "A",
  },
  {
    id: 148,
    question: "Generics help reduce:",
    options: ["Compilation", "Explicit casting", "Classes", "Objects"],
    answer: "B",
  },
  {
    id: 149,
    question: "Which is a valid generic collection declaration?",
    options: ["List<String>", "List(string)", "List[String]", "String<List>"],
    answer: "A",
  },
  {
    id: 150,
    question: "List<Integer> stores:",
    options: ["Integer objects", "int primitives directly", "String objects", "Double objects only"],
    answer: "A",
  },
  {
    id: 151,
    question: "Which cannot be used directly as a generic type argument?",
    options: ["Integer", "String", "int", "Double"],
    answer: "C",
  },
  {
    id: 152,
    question: "What is the wrapper class for int?",
    options: ["Int", "Integer", "Number", "Long"],
    answer: "B",
  },
  {
    id: 153,
    question: "In generics, ? represents:",
    options: ["An unknown type", "A null value", "A wildcard error", "A primitive"],
    answer: "A",
  },
  {
    id: 154,
    question: "List<?> represents:",
    options: ["A list of an unknown type", "A list of integers", "An empty list", "A list of Strings only"],
    answer: "A",
  },
  {
    id: 155,
    question: "Which syntax represents an upper-bounded wildcard?",
    options: ["? super T", "? extends T", "<T super>", "<T extends>"],
    answer: "B",
  },
  {
    id: 156,
    question: "Which syntax represents a lower-bounded wildcard?",
    options: ["? super T", "? extends T", "<super T>", "<T lower>"],
    answer: "A",
  },
  {
    id: 157,
    question: "List<? extends Number> can refer to a list of:",
    options: ["Number or its subclasses", "Only Number", "Only Integer", "Any primitive"],
    answer: "A",
  },
  {
    id: 158,
    question: "List<? super Integer> can refer to a list of:",
    options: ["Integer or a superclass of Integer", "Only Integer", "Only Number", "Any primitive"],
    answer: "A",
  },
  {
    id: 159,
    question: "Generic types are primarily checked at:",
    options: ["Compile time", "Runtime only", "Shutdown", "Object deletion"],
    answer: "A",
  },
  {
    id: 160,
    question: "Java generics are implemented primarily through:",
    options: ["Type erasure", "Pointer arithmetic", "Reflection only", "Serialization"],
    answer: "A",
  },
  {
    id: 161,
    question: "Can you directly use new T() inside a generic class?",
    options: ["Yes", "No", "Only with int", "Only with String"],
    answer: "B",
  },
  {
    id: 162,
    question: "Can generic methods have their own type parameters?",
    options: ["Yes", "No", "Only static methods", "Only constructors"],
    answer: "A",
  },
  {
    id: 163,
    question: "Which is a valid generic class declaration?",
    options: ["class Box<T>", "generic class Box", "class<T> Box", "Box<class T>"],
    answer: "A",
  },
  {
    id: 164,
    question: "Major benefits of generics include:",
    options: ["Type safety and code reuse", "Slower execution", "Removing all classes", "Removing objects"],
    answer: "A",
  },
  {
    id: 165,
    question: "Which is NOT a guaranteed benefit of generics?",
    options: ["Type safety", "Code reuse", "Reduced casting", "Guaranteed faster runtime execution"],
    answer: "D",
  },

  // =========================================================
  // 8. FILE HANDLING / I/O — 166–185
  // =========================================================

  {
    id: 166,
    question: "I/O stands for:",
    options: ["Input/Output", "Input/Object", "Internal/Output", "Interface/Object"],
    answer: "A",
  },
  {
    id: 167,
    question: "Which package contains many traditional Java I/O classes?",
    options: ["java.io", "java.input", "java.output", "java.file"],
    answer: "A",
  },
  {
    id: 168,
    question: "Which class is commonly used for efficient character file reading?",
    options: ["BufferedReader", "FileReaderOnly", "FileWriter", "ScannerOnly"],
    answer: "A",
  },
  {
    id: 169,
    question: "Which class writes character data to a file?",
    options: ["FileWriter", "FileReader", "FileOutput", "WriterFile"],
    answer: "A",
  },
  {
    id: 170,
    question: "Which class reads character data from a file?",
    options: ["FileReader", "FileWriter", "FileInput", "ReaderFile"],
    answer: "A",
  },
  {
    id: 171,
    question: "Which class is used for byte input from a file?",
    options: ["FileInputStream", "FileReader", "FileWriter", "BufferedWriter"],
    answer: "A",
  },
  {
    id: 172,
    question: "Which class is used for byte output to a file?",
    options: ["FileOutputStream", "FileInputStream", "FileWriter", "FileReader"],
    answer: "A",
  },
  {
    id: 173,
    question: "Which class is commonly used for formatted input?",
    options: ["Scanner", "FormatterReader", "InputReader", "FormatInput"],
    answer: "A",
  },
  {
    id: 174,
    question: "Modern Path and Files APIs are found in:",
    options: ["java.nio.file", "java.file", "java.io.path", "java.nio.io"],
    answer: "A",
  },
  {
    id: 175,
    question: "A Path represents a:",
    options: ["File system path", "Thread", "Database", "GUI component"],
    answer: "A",
  },
  {
    id: 176,
    question: "Which class provides static file operations in NIO?",
    options: ["Files", "FileOperations", "PathFiles", "NIOFilesOnly"],
    answer: "A",
  },
  {
    id: 177,
    question: "A stream represents:",
    options: ["A flow of data", "A class only", "A GUI", "A package"],
    answer: "A",
  },
  {
    id: 178,
    question: "Input streams transfer data:",
    options: ["Into the program", "Out of the program", "Between classes only", "Into the compiler"],
    answer: "A",
  },
  {
    id: 179,
    question: "Output streams transfer data:",
    options: ["Into the program", "Out of the program", "Only into memory", "Only into variables"],
    answer: "B",
  },
  {
    id: 180,
    question: "Serialization converts an object into:",
    options: ["A storable or transmittable representation", "A primitive", "A thread", "A package"],
    answer: "A",
  },
  {
    id: 181,
    question: "Which interface is commonly associated with Java serialization?",
    options: ["Serializable", "Serial", "Serialize", "ObjectSerializableOnly"],
    answer: "A",
  },
  {
    id: 182,
    question: "Which keyword prevents a field from being serialized?",
    options: ["static", "transient", "volatile", "final"],
    answer: "B",
  },
  {
    id: 183,
    question: "Which is a common Java I/O exception?",
    options: ["IOException", "IOErrorException", "InputException", "FileExceptionOnly"],
    answer: "A",
  },
  {
    id: 184,
    question: "Buffered I/O improves performance mainly by:",
    options: ["Reducing direct I/O operations", "Removing files", "Creating threads", "Increasing exceptions"],
    answer: "A",
  },
  {
    id: 185,
    question: "After file operations, resources such as streams, readers and writers should generally be:",
    options: ["Closed", "Duplicated", "Deleted", "Serialized"],
    answer: "A",
  },

  // =========================================================
  // 9. MULTITHREADING — 186–210
  // =========================================================

  {
    id: 186,
    question: "A thread is a:",
    options: ["Lightweight unit of execution", "Class only", "Package", "File"],
    answer: "A",
  },
  {
    id: 187,
    question: "Which class can be extended to create a thread?",
    options: ["Thread", "Runnable", "Process", "Executor"],
    answer: "A",
  },
  {
    id: 188,
    question: "Which interface can define a task to be executed by a thread?",
    options: ["Runnable", "Threadable", "Executable", "Task"],
    answer: "A",
  },
  {
    id: 189,
    question: "Which method starts a new thread?",
    options: ["run()", "start()", "execute()", "begin()"],
    answer: "B",
  },
  {
    id: 190,
    question: "Calling run() directly generally:",
    options: ["Creates a new thread", "Executes in the current thread", "Stops the JVM", "Creates a process"],
    answer: "B",
  },
  {
    id: 191,
    question: "Which method contains the task code for Runnable?",
    options: ["start()", "run()", "execute()", "task()"],
    answer: "B",
  },
  {
    id: 192,
    question: "Which method pauses the current thread temporarily?",
    options: ["wait()", "sleep()", "pause()", "stop()"],
    answer: "B",
  },
  {
    id: 193,
    question: "Thread.sleep() can throw:",
    options: ["InterruptedException", "IOException", "ThreadException", "SleepException"],
    answer: "A",
  },
  {
    id: 194,
    question: "Synchronization helps prevent:",
    options: ["Race conditions", "Compilation", "Inheritance", "Serialization"],
    answer: "A",
  },
  {
    id: 195,
    question: "Which keyword is used for synchronized methods/blocks?",
    options: ["synchronized", "sync", "threadsafe", "atomic"],
    answer: "A",
  },
  {
    id: 196,
    question: "A race condition occurs when:",
    options: ["Output depends on uncontrolled concurrent timing", "A program has no threads", "A class is final", "A method is private"],
    answer: "A",
  },
  {
    id: 197,
    question: "Deadlock occurs when:",
    options: ["Threads wait indefinitely for each other's resources", "Threads run too fast", "A thread finishes normally", "A class is deleted"],
    answer: "A",
  },
  {
    id: 198,
    question: "Which method causes a thread to wait until signaled?",
    options: ["wait()", "sleep()", "pause()", "awaitThread()"],
    answer: "A",
  },
  {
    id: 199,
    question: "Which method signals one waiting thread?",
    options: ["notify()", "signalAll()", "wake()", "start()"],
    answer: "A",
  },
  {
    id: 200,
    question: "Which method signals all waiting threads?",
    options: ["notify()", "notifyAll()", "signal()", "wakeAll()"],
    answer: "B",
  },
  {
    id: 201,
    question: "wait(), notify(), and notifyAll() are methods of:",
    options: ["Object", "Thread", "Runnable", "Executor"],
    answer: "A",
  },
  {
    id: 202,
    question: "Which package provides many concurrency utilities?",
    options: ["java.util.concurrent", "java.concurrent", "java.thread", "java.util.thread"],
    answer: "A",
  },
  {
    id: 203,
    question: "Which interface manages and executes asynchronous tasks?",
    options: ["ExecutorService", "RunnableService", "ThreadManager", "AsyncService"],
    answer: "A",
  },
  {
    id: 204,
    question: "A thread pool is a group of:",
    options: ["Reusable worker threads", "Database connections only", "GUI windows", "Classes"],
    answer: "A",
  },
  {
    id: 205,
    question: "Which interface represents a task that can return a result?",
    options: ["Callable", "Runnable", "Future", "Resultable"],
    answer: "A",
  },
  {
    id: 206,
    question: "Which type represents an asynchronous result?",
    options: ["Future", "Callable", "Result", "AsyncResult"],
    answer: "A",
  },
  {
    id: 207,
    question: "Which concurrency utility can limit a fixed number of concurrent accesses?",
    options: ["Semaphore", "MutexOnly", "Limiter", "Counter"],
    answer: "A",
  },
  {
    id: 208,
    question: "Atomic classes provide:",
    options: ["Thread-safe operations on certain variables", "Automatic inheritance", "GUI components", "File storage"],
    answer: "A",
  },
  {
    id: 209,
    question: "The volatile keyword primarily provides:",
    options: ["Visibility of variable updates across threads", "Atomicity of every compound operation", "Automatic locking", "Thread creation"],
    answer: "A",
  },
  {
    id: 210,
    question: "Concurrency refers to:",
    options: ["Multiple tasks making progress during overlapping periods", "Only one task running", "Only parallel hardware", "Compilation"],
    answer: "A",
  },

  // =========================================================
  // 10. GUI PROGRAMMING — 211–225
  // =========================================================

  {
    id: 211,
    question: "GUI stands for:",
    options: ["Graphical User Interface", "General User Interface", "Graphical Utility Interface", "General Utility Input"],
    answer: "A",
  },
  {
    id: 212,
    question: "A standard Java GUI toolkit is:",
    options: ["Swing", "Spring", "Servlet", "JDBC"],
    answer: "A",
  },
  {
    id: 213,
    question: "Swing classes are primarily found in:",
    options: ["javax.swing", "java.swing", "javax.gui", "java.gui"],
    answer: "A",
  },
  {
    id: 214,
    question: "Which Swing component represents a top-level window?",
    options: ["JFrame", "JWindowOnly", "JPanel", "JDialogOnly"],
    answer: "A",
  },
  {
    id: 215,
    question: "Which Swing component represents a clickable button?",
    options: ["JButton", "JClick", "JLabel", "JTextButton"],
    answer: "A",
  },
  {
    id: 216,
    question: "Which Swing component displays non-editable text?",
    options: ["JLabel", "JTextField", "JTextArea", "JText"],
    answer: "A",
  },
  {
    id: 217,
    question: "Which Swing component is used for single-line text input?",
    options: ["JTextField", "JTextArea", "JLabel", "JInput"],
    answer: "A",
  },
  {
    id: 218,
    question: "Which Swing component is commonly used for multi-line text?",
    options: ["JTextArea", "JTextField", "JLabel", "JTextBox"],
    answer: "A",
  },
  {
    id: 219,
    question: "Event-driven programming means a program:",
    options: ["Responds to user or system events", "Only executes once", "Cannot use methods", "Cannot use objects"],
    answer: "A",
  },
  {
    id: 220,
    question: "Which interface commonly handles button-click events?",
    options: ["ActionListener", "ButtonListener", "ClickListener", "EventListenerOnly"],
    answer: "A",
  },
  {
    id: 221,
    question: "Which method handles an ActionEvent?",
    options: ["actionPerformed()", "performAction()", "handleAction()", "actionEvent()"],
    answer: "A",
  },
  {
    id: 222,
    question: "A layout manager controls:",
    options: ["Component positioning and sizing", "Database connections", "Thread creation", "File access"],
    answer: "A",
  },
  {
    id: 223,
    question: "Which layout manager divides a container into five regions?",
    options: ["BorderLayout", "GridLayout", "FlowLayout", "CardLayout"],
    answer: "A",
  },
  {
    id: 224,
    question: "Which layout manager arranges components in rows and columns of equal-sized cells?",
    options: ["GridLayout", "BorderLayout", "FlowLayout", "BoxLayout"],
    answer: "A",
  },
  {
    id: 225,
    question: "Swing operations are generally expected to run on the:",
    options: ["Event Dispatch Thread", "Main Database Thread", "File Thread", "Compiler Thread"],
    answer: "A",
  },

  // =========================================================
  // 11. PACKAGES AND ACCESS MODIFIERS — 226–240
  // =========================================================

  {
    id: 226,
    question: "A Java package is used to:",
    options: ["Organize related classes and interfaces", "Create threads", "Store databases", "Compile bytecode"],
    answer: "A",
  },
  {
    id: 227,
    question: "Which keyword declares a package?",
    options: ["package", "import", "namespace", "group"],
    answer: "A",
  },
  {
    id: 228,
    question: "Which keyword is used to import classes?",
    options: ["include", "import", "using", "require"],
    answer: "B",
  },
  {
    id: 229,
    question: "Which access modifier allows access from anywhere, subject to class/package accessibility?",
    options: ["private", "public", "protected", "default"],
    answer: "B",
  },
  {
    id: 230,
    question: "A private member can be directly accessed from:",
    options: ["Any class", "The declaring class", "Any subclass", "Any package"],
    answer: "B",
  },
  {
    id: 231,
    question: "Package-private access allows access from:",
    options: ["The same package", "Any package", "Only subclasses", "Only the declaring class"],
    answer: "A",
  },
  {
    id: 232,
    question: "Protected members are accessible from:",
    options: ["The same package and subclasses under Java rules", "Only the declaring class", "Only unrelated classes", "Only interfaces"],
    answer: "A",
  },
  {
    id: 233,
    question: "Which is the most restrictive access modifier?",
    options: ["public", "protected", "private", "default"],
    answer: "C",
  },
  {
    id: 234,
    question: "Which access modifier is not allowed for a top-level class?",
    options: ["public", "private", "protected", "default"],
    answer: "B",
  },
  {
    id: 235,
    question: "For a public top-level class, the source file name should:",
    options: ["Match the class name", "Always be Main.java", "Match the package name", "Be unrelated"],
    answer: "A",
  },
  {
    id: 236,
    question: "Packages help prevent:",
    options: ["Naming conflicts", "Compilation", "Inheritance", "Object creation"],
    answer: "A",
  },
  {
    id: 237,
    question: "A fully qualified class name consists of:",
    options: ["Package name plus class name", "Only class name", "Only package name", "Class plus method name"],
    answer: "A",
  },
  {
    id: 238,
    question: "Which represents a specific class import?",
    options: ["import package.ClassName;", "include package.ClassName;", "using package.ClassName;", "package import ClassName;"],
    answer: "A",
  },
  {
    id: 239,
    question: "Which symbol is used to import all accessible types from a package?",
    options: ["*", "&", "#", "%"],
    answer: "A",
  },
  {
    id: 240,
    question: "A package declaration normally appears:",
    options: ["At the beginning of the source file", "Inside main()", "At the end of the class", "After all methods"],
    answer: "A",
  },

  // =========================================================
  // 12. ADVANCED JAVA CONCEPTS — 241–250
  // =========================================================

  {
    id: 241,
    question: "Lambda expressions support:",
    options: ["Functional-style programming", "Only object serialization", "Only GUI programming", "Only file handling"],
    answer: "A",
  },
  {
    id: 242,
    question: "A lambda expression can be used where a:",
    options: ["Functional interface is expected", "Class constructor is expected", "Package is expected", "Primitive is expected"],
    answer: "A",
  },
  {
    id: 243,
    question: "A functional interface has exactly:",
    options: ["One abstract method", "Two abstract methods", "No methods", "One constructor"],
    answer: "A",
  },
  {
    id: 244,
    question: "Which annotation identifies a functional interface?",
    options: ["@FunctionalInterface", "@Lambda", "@Functional", "@Interface"],
    answer: "A",
  },
  {
    id: 245,
    question: "Java streams are used to:",
    options: ["Process sequences of data", "Create classes", "Compile programs", "Create packages"],
    answer: "A",
  },
  {
    id: 246,
    question: "Which stream operation transforms each element?",
    options: ["map()", "filter()", "reduce()", "collectOnly()"],
    answer: "A",
  },
  {
    id: 247,
    question: "Which stream operation selects matching elements?",
    options: ["map()", "filter()", "reduce()", "select()"],
    answer: "B",
  },
  {
    id: 248,
    question: "Which stream operation combines elements into one result?",
    options: ["map()", "filter()", "reduce()", "combineOnly()"],
    answer: "C",
  },
  {
    id: 249,
    question: "Optional represents a value that:",
    options: ["May or may not be present", "Must always be null", "Must always be present", "Can only be an integer"],
    answer: "A",
  },
  {
    id: 250,
    question: "Which Java feature allows runtime inspection of classes, methods and fields?",
    options: ["Reflection", "Serialization", "Generics", "Inheritance"],
    answer: "A",
  },
]

export default questions