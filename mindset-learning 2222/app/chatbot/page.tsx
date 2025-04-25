"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Send, FileText, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Array<{ role: "user" | "bot"; content: string }>>([
    {
      role: "bot",
      content: "Hello! I'm your AI assistant. Upload a PDF document, and I'll help answer your questions about it.",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).filter((file) => file.type === "application/pdf")
      setUploadedFiles((prev) => [...prev, ...newFiles])

      // Add a message about the uploaded file
      setMessages((prev) => [
        ...prev,
        { role: "user", content: `Uploaded: ${newFiles.map((f) => f.name).join(", ")}` },
        { role: "bot", content: "PDF uploaded successfully! What would you like to know about this document?" },
      ])
    }
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: inputValue }])
    setInputValue("")

    // Simulate bot response
    setIsLoading(true)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            uploadedFiles.length > 0
              ? "Based on the document you uploaded, I can provide this information. (This is a simulated response as this is a demo interface.)"
              : "Please upload a PDF document first so I can analyze it and answer your questions.",
        },
      ])
      setIsLoading(false)
    }, 1500)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Scroll to bottom when messages change
  useState(() => {
    scrollToBottom()
  })

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">AI Document Assistant</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Upload your PDF documents and ask questions to get instant insights and answers from our AI assistant.
        </p>
      </div>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>Document Chat</CardTitle>
          <CardDescription>Upload PDFs and ask questions about their content</CardDescription>
        </CardHeader>
        <CardContent>
          {/* File upload area */}
          <div className="mb-6">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".pdf"
              className="hidden"
              multiple
            />
            <Button
              variant="outline"
              className="w-full h-24 border-dashed flex flex-col gap-2"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-6 w-6" />
              <span>Upload PDF Documents</span>
            </Button>
          </div>

          {/* Uploaded files list */}
          {uploadedFiles.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Uploaded Documents:</h3>
              <div className="space-y-2">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center p-2 bg-muted rounded-md text-sm">
                    <FileText className="h-4 w-4 mr-2" />
                    <span className="truncate">{file.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat messages */}
          <div className="border rounded-md p-4 h-[400px] overflow-y-auto mb-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3 rounded-lg p-3",
                    message.role === "user"
                      ? "ml-auto bg-primary text-primary-foreground max-w-[80%]"
                      : "bg-muted max-w-[80%]",
                  )}
                >
                  <div className="h-8 w-8 rounded-full bg-background flex items-center justify-center">
                    {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className="text-sm">{message.content}</div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3 rounded-lg p-3 bg-muted max-w-[80%]">
                  <div className="h-8 w-8 rounded-full bg-background flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="text-sm">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-current animate-bounce"></div>
                      <div className="h-2 w-2 rounded-full bg-current animate-bounce delay-75"></div>
                      <div className="h-2 w-2 rounded-full bg-current animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full gap-2">
            <Textarea
              placeholder="Ask a question about your document..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />
            <Button onClick={handleSendMessage} disabled={isLoading}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
