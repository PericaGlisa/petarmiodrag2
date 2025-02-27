import { Tool } from './Tool';
import { TOOL_CATEGORIES } from '../../constants/tools';

export function ToolGrid() {
  return (
    <div className="space-y-8">
      {TOOL_CATEGORIES.map((category, index) => (
        <div key={index}>
          <div className="flex items-center gap-2 mb-4">
            <category.icon className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white m-0">{category.name}</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {category.tools.map((tool, toolIndex) => (
              <Tool key={toolIndex} name={tool} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}