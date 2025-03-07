# Code Review Guidelines

A concise guide for effective code reviews in the IoT Dashboard project.

## Core Principles

1. **Respectful & Constructive**: Focus on code, not the person
2. **Efficient**: Be thorough but timely
3. **Context-Aware**: Understand the purpose of the changes
4. **Knowledge Sharing**: Use reviews as learning opportunities

## Review Checklist

### Functionality
- Works as expected and meets requirements
- Handles edge cases appropriately

### Quality & Style
- Follows project coding standards (ESLint rules)
- Clean, readable, and maintainable
- No code duplication or "code smells"

### Performance & Security
- No obvious performance issues or memory leaks
- Properly handles user input and sensitive data

### Testing
- Adequate test coverage including edge cases
- All tests pass

### Documentation
- Clear comments for complex logic
- Well-documented public APIs

## Process

### Before Submission
- Self-review your code
- Run tests and linting (`npm run lint:fix`)
- Remove unused/commented code

### During Review
- Provide specific, actionable feedback
- Suggest solutions when pointing out issues
- Ask questions if something is unclear

### After Review
- Address all feedback or explain why changes weren't made
- Request re-review when necessary

## Language-Specific Guidelines

### JavaScript
- Use ES6+ features and follow ESLint rules
- Prefer `const`, use `let` when necessary, avoid `var`
- Keep functions small and focused

### HTML/CSS
- Use semantic HTML and proper accessibility attributes
- Follow BEM naming convention for CSS
- Use CSS variables for theming

## Effective Feedback Examples

✅ "Consider breaking this complex function into smaller ones."  
✅ "This variable name could be more descriptive."

❌ "This code is bad."  
❌ "Rewrite this."

Remember: The goal is to improve the code, not criticize the developer. 