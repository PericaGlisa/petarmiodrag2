import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, Home } from 'lucide-react';
import { Button } from '../ui/Button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-[#050914] via-[#070B1A] to-[#0A1026]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-[10px] opacity-50">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/30 blur-[120px] animate-pulse"></div>
            </div>
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-500/20 via-transparent to-transparent opacity-50 transform -skew-y-12 animate-float"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 py-12 text-center relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <motion.div
                    animate={{ 
                      rotate: [0, -10, 10, -10, 10, 0],
                      scale: [1, 1.1, 1.1, 1.1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <AlertTriangle className="w-24 h-24 text-blue-500" />
                  </motion.div>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white mb-4">Oops! Something went wrong</h1>
              <h2 className="text-xl font-semibold text-gray-300 mb-8">
                We're experiencing some technical difficulties
              </h2>
              
              <p className="text-gray-400 max-w-lg mx-auto mb-8">
                Don't worry, our team has been notified and is working on fixing the issue.
                In the meantime, you can try refreshing the page or return to the homepage.
              </p>

              <div className="space-x-4">
                <Button 
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center gap-2 px-6 py-3"
                >
                  Refresh Page
                </Button>

                <Button 
                  as={Link} 
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3"
                >
                  <Home size={20} />
                  Back to Homepage
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}